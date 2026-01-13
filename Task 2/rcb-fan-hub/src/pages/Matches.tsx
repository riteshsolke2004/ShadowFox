import React from 'react';
import { matches } from '../data/mockData';

const Matches: React.FC = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <h1 className="section-title">Match Schedule</h1>
            <div className="matches-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {matches.map(match => (
                    <div key={match.id} style={{
                        background: 'var(--rcb-gray)',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        marginBottom: '1.5rem',
                        padding: '1.5rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--rcb-gold)', marginBottom: '0.5rem' }}>
                                    {match.date} | {match.venue}
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    <span style={{ color: 'var(--rcb-red)' }}>RCB</span> <span style={{ fontSize: '1rem', color: '#888' }}>vs</span> {match.opponent}
                                </div>
                            </div>
                            <div>
                                <span style={{
                                    background: match.status === 'Completed' ? '#888' : 'var(--rcb-red)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {match.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Matches;
