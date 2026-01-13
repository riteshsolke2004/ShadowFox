import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const primaryLinks = [
        { name: 'Home', path: '/' },
        { name: 'News', path: '/news' },
        { name: 'RCB TV', path: '/rcb-tv' },
        { name: 'Team', path: '/squad' },
        { name: 'Fixtures', path: '/matches' },
        { name: 'Photos', path: '/photos' },
        { name: 'Shop', path: '/shop' },
        { name: 'More', path: '#' },
    ];

    return (
        <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            {/* Top Bar - App Download Strip */}
            <div style={{ backgroundColor: '#000', color: '#888', padding: '0.5rem 0', fontSize: '0.8rem', borderBottom: '1px solid #222' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', textTransform: 'uppercase' }}>
                    <span>Download Our App</span>
                    <a href="#" className="hover-text-gold">Android</a>
                    <a href="#" className="hover-text-gold">iOS</a>
                </div>
            </div>

            {/* Main Navigation */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.95)', borderBottom: '4px solid var(--rcb-red)', height: 'var(--nav-height)', backdropFilter: 'blur(10px)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    {/* Logo Section */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '60px', height: '60px', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for official logo */}
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png" alt="RCB Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                        </div>
                        <div style={{ fontFamily: 'Teko', fontSize: '2rem', lineHeight: 1, textTransform: 'uppercase' }}>
                            <span style={{ color: 'var(--rcb-red)' }}>Royal Challengers</span><br />
                            <span style={{ color: 'var(--rcb-gold)' }}>Bengaluru</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="desktop-menu" style={{ display: 'flex', gap: '2rem', height: '100%' }}>
                        {primaryLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    color: location.pathname === link.path ? 'var(--rcb-red)' : 'white',
                                    fontFamily: 'Teko',
                                    fontSize: '1.4rem',
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                    letterSpacing: '0.5px',
                                    borderBottom: location.pathname === link.path ? '4px solid var(--rcb-red)' : '4px solid transparent',
                                    paddingTop: '4px' // Compensate for border
                                }}
                                className="nav-item"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ display: 'none', background: 'none', color: 'white', fontSize: '2rem' }}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'fixed', top: '110px', left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.98)',
                    zIndex: 999,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    {primaryLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '2rem', fontFamily: 'Teko', textTransform: 'uppercase', color: 'white' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-item:hover { color: var(--rcb-red) !important; }
      `}</style>
        </header>
    );
};

export default Navbar;
