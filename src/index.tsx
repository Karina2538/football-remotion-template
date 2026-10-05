import { registerRoot, Composition } from 'remotion';
import { MatchdayComposition } from './Compositions/Matchday';

const homeLineup = [
  { number: 24, name: 'Onana', position: 'GK', x: 50, y: 88 },
  { number: 3, name: 'Mazraoui', position: 'DF', x: 15, y: 70 },
  { number: 4, name: 'De Ligt', position: 'DF', x: 38, y: 74 },
  { number: 6, name: 'Martinez', position: 'DF', x: 62, y: 74 },
  { number: 20, name: 'Dalot', position: 'DF', x: 85, y: 70 },
  { number: 18, name: 'Casemiro', position: 'MF', x: 50, y: 53 },
  { number: 37, name: 'Mainoo', position: 'MF', x: 30, y: 40 },
  { number: 8, name: 'Fernandes', position: 'MF', x: 70, y: 40 },
  { number: 17, name: 'Garnacho', position: 'FW', x: 20, y: 22 },
  { number: 11, name: 'Hojlund', position: 'FW', x: 50, y: 15 },
  { number: 10, name: 'Rashford', position: 'FW', x: 80, y: 22 },
];

const awayLineup = [
  { number: 22, name: 'Raya', position: 'GK', x: 50, y: 88 },
  { number: 4, name: 'White', position: 'DF', x: 15, y: 70 },
  { number: 2, name: 'Saliba', position: 'DF', x: 38, y: 74 },
  { number: 6, name: 'Gabriel', position: 'DF', x: 62, y: 74 },
  { number: 12, name: 'Timber', position: 'DF', x: 85, y: 70 },
  { number: 5, name: 'Partey', position: 'DF', x: 50, y: 53 },
  { number: 41, name: 'Rice', position: 'MF', x: 30, y: 40 },
  { number: 8, name: 'Odegaard', position: 'MF', x: 70, y: 40 },
  { number: 7, name: 'Saka', position: 'FW', x: 20, y: 22 },
  { number: 29, name: 'Havertz', position: 'FW', x: 50, y: 15 },
  { number: 11, name: 'Martinelli', position: 'FW', x: 80, y: 22 },
];

export const RemotionRoot = () => (
  <Composition
    id="MatchPreview"
    component={MatchdayComposition}
    durationInFrames={1740}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={{
      language: 'en',
      title: 'MATCH PREVIEW',
      homeTeam: 'Manchester United',
      awayTeam: 'Arsenal',
      homeLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
      awayLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      matchTime: 'TONIGHT 10:00 PM',
      stadium: 'Old Trafford',
      fanClip: '',
      homeColor: '#da291c',
      homeGkColor: '#fbe122',
      awayColor: '#063672',
      awayGkColor: '#00a859',
      homeLineup,
      awayLineup,
    }}
  />
);

registerRoot(RemotionRoot);
