import { registerRoot, Composition } from 'remotion';
import { MatchdayComposition } from './Compositions/Matchday';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MatchPreview"
        component={MatchdayComposition}
        durationInFrames={1740}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          language: 'my',
          title: 'ပွဲကြိုသုံးသပ်ချက်',
          homeTeam: 'မန်ချက်စတာ ယူနိုက်တက်',
          awayTeam: 'အာဆင်နယ်',
          homeLogo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
          awayLogo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
          matchTime: 'ဒီနေ့ည ၁၀:၀၀ နာရီ',
          stadium: 'အိုးထရက်ဖို့ဒ် ကွင်း',
          fanClip: '',
          homeLineup: [
            { number: 24, name: 'အိုနာနာ', position: 'GK' },
            { number: 20, name: 'ဒါးလော့တ်', position: 'DF' },
            { number: 6, name: 'မာတီနက်ဇ်', position: 'DF' },
            { number: 4, name: 'ဒီလစ်ခ်ျ', position: 'DF' },
            { number: 3, name: 'မာဇရာဝီ', position: 'DF' },
            { number: 18, name: 'ကာစီမီရို', position: 'MF' },
            { number: 37, name: 'မေနူး', position: 'MF' },
            { number: 8, name: 'ဖာနန်ဒက်စ်', position: 'MF' },
            { number: 17, name: 'ဂါနာချို', position: 'FW' },
            { number: 10, name: 'ရက်ရှ်ဖို့ဒ်', position: 'FW' },
            { number: 11, name: 'ဟော့ဂျလန်း', position: 'FW' }
          ]
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
