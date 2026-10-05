export interface Player {
  number: number;
  name: string;
  position: string; // 'GK' | 'DF' | 'MF' | 'FW'
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
  homeLineup: Player[];
}
