import React from 'react';
import type { Player } from '../types';

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
    return (
        <div className="player-card" style={{
            background: 'var(--rcb-gray)',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center',
            border: '1px solid transparent',
            transition: 'all 0.3s'
        }}>
            <div style={{ background: 'linear-gradient(to top, var(--rcb-dark), transparent)', height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <img src={player.image} alt={player.name} style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
            <div style={{ padding: '1rem', background: 'var(--rcb-dark)', borderTop: '4px solid var(--rcb-gold)' }}>
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.2rem' }}>{player.name}</h3>
                <p style={{ color: 'var(--rcb-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>{player.role}</p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#aaa', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <span>Mat: {player.stats.matches}</span>
                    {player.stats.runs !== undefined && <span>Runs: {player.stats.runs}</span>}
                    {player.stats.wickets !== undefined && <span>Wkts: {player.stats.wickets}</span>}
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'var(--rcb-gold)',
                color: 'black',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
            }}>
                {player.jerseyNumber}
            </div>
        </div>
    );
};

export default PlayerCard;
