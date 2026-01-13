import React from 'react';
import { matches, news } from '../data/mockData';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const nextMatch = matches.find(m => m.status === 'Upcoming');

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Carousel Section - Full Width */}
            <section className="hero-section" style={{
                height: '80vh',
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('/hero.png') center/cover`,
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '4rem',
                position: 'relative'
            }}>
                <div className="container" style={{ width: '100%' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <span style={{
                            backgroundColor: 'var(--rcb-gold)',
                            color: 'black',
                            padding: '0.2rem 1rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            RCB Insider
                        </span>
                        <h1 style={{
                            fontSize: '4rem',
                            lineHeight: 1,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                        }}>
                            Bold Diaries: The Road to Glory Starts Here
                        </h1>
                        <button className="btn btn-primary">Watch Now</button>
                    </div>
                </div>

                {/* Floating Match Card */}
                {nextMatch && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-40px',
                        right: '5%',
                        background: 'var(--rcb-dark)',
                        border: '2px solid var(--rcb-red)',
                        padding: '1.5rem',
                        width: '350px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        zIndex: 10
                    }}>
                        <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#888', fontSize: '1rem' }}>Next Match</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>RCB</div>
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 'bold' }}>VS</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{nextMatch.opponent.split(' ').map(w => w[0]).join('')}</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--rcb-gold)', marginBottom: '1rem' }}>
                            {nextMatch.date} • {nextMatch.venue.split(',')[0]}
                        </div>
                        <button className="btn btn-gold" style={{ width: '100%', fontSize: '1rem', padding: '0.5rem' }}>Match Center</button>
                    </div>
                )}
            </section>

            {/* Mixed Content Feed */}
            <section className="container" style={{ padding: '6rem 1rem' }}>
                <h2 className="section-title" style={{
                    fontSize: '3rem',
                    marginBottom: '2rem',
                    borderLeft: '5px solid var(--rcb-gold)',
                    paddingLeft: '1rem',
                    lineHeight: 1
                }}>
                    Latest <span style={{ color: 'var(--rcb-red)' }}>Updates</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Main big news item */}
                    <div style={{ gridColumn: 'span 2', position: 'relative', minHeight: '400px', overflow: 'hidden' }} className="news-card-large">
                        <img src={news[0].image} alt={news[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, black)' }}>
                            <span style={{ color: 'var(--rcb-gold)', fontWeight: 'bold' }}>NEWS</span>
                            <h3 style={{ fontSize: '2.5rem', lineHeight: 1.1, marginTop: '0.5rem' }}>{news[0].title}</h3>
                        </div>
                    </div>

                    {/* Smaller items */}
                    {news.slice(1).map(item => (
                        <div key={item.id} style={{ backgroundColor: 'var(--rcb-dark)', borderBottom: '3px solid var(--rcb-red)', transition: 'transform 0.3s' }} className="news-card">
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.date}</span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{item.title}</h3>
                                <Link to={`/news/${item.id}`} style={{ color: 'var(--rcb-red)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Read Article</Link>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder for Video/More content */}
                    <div style={{ backgroundColor: 'var(--rcb-dark)', borderBottom: '3px solid var(--rcb-gold)' }} className="news-card">
                        <div style={{ height: '200px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '3rem', color: 'var(--rcb-gold)' }}>▶</span>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 'bold' }}>RCB TV</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Practice Session Highlights: 2025 Camp</h3>
                            <Link to="/videos/1" style={{ color: 'var(--rcb-red)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>Watch Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Download Banner */}
            <section style={{ background: 'var(--rcb-red)', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Download the Official RCB App</h2>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Get exclusive access to behind-the-scenes content, live scores, and connect with the RCB family.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button style={{ background: 'black', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>Download on</span><br /><strong style={{ fontSize: '1.2rem' }}>App Store</strong>
                        </button>
                        <button style={{ background: 'black', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>Get it on</span><br /><strong style={{ fontSize: '1.2rem' }}>Google Play</strong>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
