export interface Player {
    id: string;
    name: string;
    role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
    jerseyNumber: number;
    image: string;
    stats: {
        matches: number;
        runs?: number;
        wickets?: number;
        average?: number;
    };
}

export interface Match {
    id: string;
    opponent: string;
    date: string;
    venue: string;
    result?: string;
    status: 'Upcoming' | 'Completed' | 'Live';
}

export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    image: string;
}
