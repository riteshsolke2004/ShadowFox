import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const footerLinks = [
        { title: 'TEAM', links: ['Men', 'Women', 'Support Staff'] },
        { title: 'NEWS', links: ['Latest', 'Press Releases', 'Features'] },
        { title: 'RCB TV', links: ['Bold Diaries', 'Game Day', 'Insider'] },
        { title: 'MORE', links: ['About Us', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'] }
    ];

    return (
        <footer style={{ backgroundColor: '#111', color: '#888', paddingTop: '4rem', borderTop: '5px solid var(--rcb-gold)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                    {/* Logo Column */}
                    <div>
                        <div style={{ width: '80px', height: '80px', marginBottom: '1rem' }}>
                            <img src="/logo.png" alt="RCB Logo" style={{ maxWidth: '100%' }} />
                        </div>
                        <p>Royal Challengers Bengaluru</p>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map(section => (
                        <div key={section.title}>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '1px' }}>{section.title}</h3>
                            <ul style={{ listStyle: 'none' }}>
                                {section.links.map(link => (
                                    <li key={link} style={{ marginBottom: '0.8rem' }}>
                                        <Link to="#" className="hover-text-gold" style={{ transition: 'color 0.3s' }}>{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social & Copyright */}
                <div style={{ borderTop: '1px solid #222', padding: '2rem 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <div>
                        &copy; {new Date().getFullYear()} Royal Challengers Sports Private Limited
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'white' }}>FB</a>
                        <a href="#" style={{ color: 'white' }}>TW</a>
                        <a href="#" style={{ color: 'white' }}>IG</a>
                        <a href="#" style={{ color: 'white' }}>YT</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
