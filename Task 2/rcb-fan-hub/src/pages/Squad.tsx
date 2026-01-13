import React from 'react';
import { players } from '../data/mockData';
import PlayerCard from '../components/PlayerCard';

const Squad: React.FC = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <h1 className="section-title">Team Squad 2025</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                {players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
};

export default Squad;
