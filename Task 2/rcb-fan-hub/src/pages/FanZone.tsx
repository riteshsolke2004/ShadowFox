import React, { useState } from 'react';

const FanZone: React.FC = () => {
    const [voted, setVoted] = useState<string | null>(null);

    const handleVote = (option: string) => {
        setVoted(option);
        // Simulate API call
        setTimeout(() => alert('Thanks for voting!'), 500);
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <h1 className="section-title">Fan Zone</h1>

            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--rcb-gray)', padding: '2rem', borderRadius: '8px' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Fan Poll</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Who will be the top scorer in the next match?</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell', 'Rajat Patidar'].map(player => (
                        <button
                            key={player}
                            onClick={() => handleVote(player)}
                            disabled={voted !== null}
                            style={{
                                padding: '1rem',
                                fontSize: '1.1rem',
                                background: voted === player ? 'var(--rcb-gold)' : '#333',
                                color: voted === player ? 'black' : 'white',
                                border: voted === player ? '2px solid var(--rcb-gold)' : '1px solid #555',
                                borderRadius: '4px',
                                cursor: voted ? 'default' : 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {player} {voted === player && '(You Voted)'}
                        </button>
                    ))}
                </div>

                {voted && (
                    <div style={{ marginTop: '2rem', color: 'var(--rcb-gold)' }}>
                        <p>Current Results:</p>
                        <div style={{ width: '100%', background: '#333', height: '10px', borderRadius: '5px', marginTop: '0.5rem', overflow: 'hidden' }}>
                            <div style={{ width: '45%', background: 'var(--rcb-red)', height: '100%' }}></div>
                        </div>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Virat Kohli leads with 45%</p>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '4rem' }}>
                <h2 className="section-title">Join the #RCBArmy</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary">Download App</button>
                    <button className="btn btn-gold">Official Store</button>
                </div>
            </div>
        </div>
    );
};

export default FanZone;
