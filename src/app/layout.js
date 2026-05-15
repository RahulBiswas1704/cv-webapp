import './globals.css';

export const metadata = {
  title: 'Rahul Biswas | Tech Enthusiast',
  description: 'Personal CV and Portfolio of Rahul Biswas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
