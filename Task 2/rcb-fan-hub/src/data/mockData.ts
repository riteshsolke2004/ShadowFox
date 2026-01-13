import type { Player, Match, NewsItem } from '../types';

export const players: Player[] = [
    {
        id: '1',
        name: 'Virat Kohli',
        role: 'Batsman',
        jerseyNumber: 18,
        image: '/virat.png',
        stats: { matches: 237, runs: 7263, average: 37.25 }
    },
    {
        id: '2',
        name: 'Faf du Plessis',
        role: 'Batsman',
        jerseyNumber: 13,
        image: '/faf.png',
        stats: { matches: 130, runs: 4133, average: 36.90 }
    },
    {
        id: '3',
        name: 'Glenn Maxwell',
        role: 'All-rounder',
        jerseyNumber: 32,
        image: '/maxwell.png',
        stats: { matches: 124, runs: 2719, wickets: 31 }
    },
    {
        id: '4',
        name: 'Mohammed Siraj',
        role: 'Bowler',
        jerseyNumber: 73,
        image: '/siraj.png',
        stats: { matches: 79, wickets: 78, average: 29.82 }
    }
];

export const matches: Match[] = [
    {
        id: '1',
        opponent: 'Chennai Super Kings',
        date: '2025-03-22',
        venue: 'M. Chinnaswamy Stadium, Bengaluru',
        status: 'Upcoming'
    },
    {
        id: '2',
        opponent: 'Mumbai Indians',
        date: '2025-03-26',
        venue: 'Wankhede Stadium, Mumbai',
        status: 'Upcoming'
    }
];

export const news: NewsItem[] = [
    {
        id: '1',
        title: 'RCB Training Camp Begins',
        summary: 'The Royal Challengers Bangalore have started their pre-season camp at the Chinnaswamy Stadium.',
        date: '2025-03-10',
        image: '/hero.png'
    },
    {
        id: '2',
        title: 'New Jersey Reveal',
        summary: 'RCB unveils the new jersey for current season with a bold design.',
        date: '2025-03-05',
        image: '/maxwell.png'
    }
];
