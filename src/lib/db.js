import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const usePostgres = !!process.env.DATABASE_URL;

let pool;
if (usePostgres) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  // Ensure table exists
  pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `).catch(console.error);
}

export async function saveMessage(name, email, message) {
  if (usePostgres) {
    const query = 'INSERT INTO messages(name, email, message) VALUES($1, $2, $3)';
    await pool.query(query, [name, email, message]);
  } else {
    // Fallback to local JSON file for local testing without database
    const filePath = path.join(process.cwd(), 'messages.json');
    let messages = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      if (data) messages = JSON.parse(data);
    }
    messages.push({
      id: Date.now(),
      name,
      email,
      message,
      created_at: new Date().toISOString()
    });
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  }
}
