export interface Player {
  number: number;
  name: string;
  position: string;
  x: number; // Pitch Horizontal % (0-100)
  y: number; // Pitch Vertical % (0-100)
  image?: string; // Player PNG Cutout Image URL
}

export interface FootballMatchProps {
  language: 'my' | 'en';
  title: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  matchTime: string;
  stadium: string;
  fanClip: string;
  homeColor: string;
  awayColor: string;
  homeGkColor: string;
  awayGkColor: string;
  homeLineup: Player[];
  awayLineup: Player[];
}
