'use client';

import { useRef, useState, useEffect } from 'react';
import { submitContactForm } from './actions';
import { 
  EnvelopeSimple, 
  ArrowRight,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
  RedditLogo,
  PaperPlaneRight
} from '@phosphor-icons/react';

export default function Home() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleAction(formData) {
    setStatus('submitting');
    const result = await submitContactForm(formData);
    if (result.error) {
      setStatus('error');
    } else {
      setStatus('success');
      formRef.current?.reset();
    }
  }

  // Prevent hydration mismatch for client-only elements
  if (!mounted) return null;

  return (
    <>
      <div className="bg-animation"></div>
      <main className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <h1>Rahul <span className="gradient-text">Biswas.</span></h1>
          <p>Driven by a passion for technology and a flair for communication. I thrive on continuous growth, solving problems, and exploring innovative solutions.</p>
          
          <div className="links-hub">
            <a href="https://github.com/rahulbiswas1704" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="GitHub">
              <GithubLogo size={28} weight="duotone" />
            </a>
            <a href="https://www.linkedin.com/in/rahulbiswas1704?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="LinkedIn">
              <LinkedinLogo size={28} weight="duotone" />
            </a>
            <a href="https://x.com/rahulbiswas1704?t=Jk63uAOFdYyqS_tLwU5Q0w&s=09" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="Twitter / X">
              <TwitterLogo size={28} weight="duotone" />
            </a>
            <a href="https://www.instagram.com/rahulbiswas1704?igsh=MWx1Y2o0bDZwdmZscg==" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="Instagram">
              <InstagramLogo size={28} weight="duotone" />
            </a>
            <a href="https://www.facebook.com/rahulbiswas1704?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="Facebook">
              <FacebookLogo size={28} weight="duotone" />
            </a>
            <a href="https://discord.com/invite/qC5mG5SjYc" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="Discord">
              <DiscordLogo size={28} weight="duotone" />
            </a>
            <a href="https://www.reddit.com/u/rahulbiswas1704/s/mO07QWd4S8" target="_blank" rel="noopener noreferrer" className="link-item" aria-label="Reddit">
              <RedditLogo size={28} weight="duotone" />
            </a>
            <a href="mailto:rahul.biswas1704@gmail.com" className="link-item">
              <EnvelopeSimple size={28} weight="duotone" />
            </a>
            <a href="#contact" className="link-item connect-btn">
              Let's Connect <ArrowRight size={24} weight="bold" />
            </a>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="section">
          <h2 className="section-title">Experience & Education</h2>
          <div className="grid-2">
            
            <div className="experience-column">
              <div className="card" style={{ marginBottom: '2rem' }}>
                <span className="date">Nov 2021 - Present</span>
                <h3>Project Manager</h3>
                <h4>ZK Construction Pvt. Ltd.</h4>
                <p>Managing projects, organizing the company's profile, executing planning, and improving internal systems.</p>
              </div>
              
              <div className="card">
                <span className="date">Mar 2020 - Oct 2021</span>
                <h3>System Manager</h3>
                <h4>Unique Star (NNTUS E-Commerce India Pvt. Ltd.)</h4>
                <p>Managing accounts, controlling the admin panel, creating marketing-related graphics, and designing high-quality presentations.</p>
              </div>
            </div>

            <div className="education-column">
              <div className="card" style={{ marginBottom: '2rem' }}>
                <span className="date">Mar 2019 - Feb 2020</span>
                <h3>Diploma In Information Technology</h3>
                <h4>Jawaharlal Nehru National Youth Computer Centre</h4>
                <p>Completed with 92.5% Grades. [370 Out Of 400]</p>
              </div>
              
              <div className="card">
                <span className="date">Aug 2019 - Dropped out</span>
                <h3>Diploma In Electrical Engineering</h3>
                <h4>Modern Institute of Engineering & Technology</h4>
                <p>1st Sem Completed with A Cumulative GPA Of 4.5. 2nd Sem Completed with A Cumulative GPA Of 6.9.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid-2">
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--text-primary)' }}>Technical Skills</h3>
              <div className="skills-container">
                <span className="skill-tag">PC Hardware</span>
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Analyzing Data</span>
                <span className="skill-tag">AI Prompt Engineering</span>
                <span className="skill-tag">Graphic Designing</span>
                <span className="skill-tag">Video Editing</span>
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--text-primary)' }}>Professional & Personal</h3>
              <div className="skills-container">
                <span className="skill-tag">Business Planning</span>
                <span className="skill-tag">Managing Teams</span>
                <span className="skill-tag">Problem Solver</span>
                <span className="skill-tag">Creative Thinking</span>
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Life-long Learner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Database Form */}
        <section id="contact" className="section">
          <h2 className="section-title">Let's Build <span className="gradient-text">Something.</span></h2>
          <div className="grid-2">
            <div>
              <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Whether it's mastering strategic planning or managing unexpected challenges, I am ready. Drop me a message and it will be saved directly to my database.
              </p>
            </div>

            <div>
              <form ref={formRef} action={handleAction} className="contact-form">
                <div className="input-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="input-group">
                  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                
                <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message <PaperPlaneRight size={24} weight="fill" />
                    </>
                  )}
                </button>

                {status === 'success' && <p style={{ color: '#10b981', marginTop: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>Message saved successfully!</p>}
                {status === 'error' && <p style={{ color: '#ef4444', marginTop: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>Failed to send message. Please try again.</p>}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
