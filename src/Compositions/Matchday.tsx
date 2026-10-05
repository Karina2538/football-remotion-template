import React from 'react';
import { AbsoluteFill, OffthreadVideo, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FootballMatchProps, Player } from '../types';

const BroadcastPitchBoard: React.FC<{
  teamName: string;
  logo: string;
  lineup: Player[];
  primaryColor: string;
  gkColor: string;
}> = ({ teamName, logo, lineup, primaryColor, gkColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ padding: '20px 30px', alignItems: 'center' }}>
      {/* Broadcast Header Banner */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 15,
        backgroundColor: 'rgba(5, 11, 20, 0.85)',
        padding: '10px 30px',
        borderRadius: 50,
        border: `2px solid ${primaryColor}`,
        boxShadow: `0 0 20px ${primaryColor}88`
      }}>
        <img src={logo} style={{ width: 50, height: 50, objectFit: 'contain' }} alt={teamName} />
        <h2 style={{ fontSize: 34, color: '#ffffff', fontWeight: 'bold', letterSpacing: 1 }}>{teamName}</h2>
        <span style={{ fontSize: 24, color: '#f5c518', fontWeight: 'bold' }}>(4-3-3)</span>
      </div>

      {/* 3D Perspective Pitch Stage */}
      <div style={{
        width: '100%',
        height: '82%',
        position: 'relative',
        perspective: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Tilting Pitch Surface */}
        <div style={{
          width: '95%',
          height: '95%',
          position: 'relative',
          backgroundColor: '#144123',
          backgroundImage: 'linear-gradient(0deg, #123c20 50%, #174a27 50%)',
          backgroundSize: '100% 40px',
          border: '4px solid rgba(255, 255, 255, 0.8)',
          borderRadius: 24,
          transform: 'rotateX(28deg) scale(0.95)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 30px 60px rgba(0,0,0,0.9), inset 0 0 50px rgba(0,0,0,0.5)'
        }}>
          {/* Pitch Markings */}
          <div style={{ position: 'absolute', top: '50%', width: '100%', height: 2, backgroundColor: 'rgba(255,255,255,0.6)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 180, height: 180, border: '2px solid rgba(255,255,255,0.6)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
          <div style={{ position: 'absolute', top: 0, left: '22%', width: '56%', height: '18%', border: '2px solid rgba(255,255,255,0.6)', borderTop: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: '22%', width: '56%', height: '18%', border: '2px solid rgba(255,255,255,0.6)', borderBottom: 'none' }} />
        </div>

        {/* Players Layer (Counter-rotated for upright 3D effect) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          {lineup.map((player, idx) => {
            // Staggered Entrance Pop Animation
            const pop = spring({
              frame: frame - idx * 2.5,
              fps,
              config: { damping: 11, stiffness: 80 }
            });

            const isGK = player.position === 'GK';
            const playerJerseyColor = isGK ? gkColor : primaryColor;

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${player.x}%`,
                  top: `${player.y}%`,
                  transform: `translate(-50%, -50%) scale(${pop})`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: Math.round(player.y * 10)
                }}
              >
                {/* Player PNG Cutout or Fallback Badge */}
                {player.image ? (
                  <div style={{
                    position: 'relative',
                    width: 100,
                    height: 125,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                  }}>
                    <img
                      src={player.image}
                      alt={player.name}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0px 10px 12px rgba(0,0,0,0.85))'
                      }}
                    />
                    {/* Number Badge overlay on Cutout */}
                    <div style={{
                      position: 'absolute',
                      top: 2,
                      right: 2,
                      backgroundColor: playerJerseyColor,
                      color: '#ffffff',
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      fontSize: 13,
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.6)'
                    }}>
                      {player.number}
                    </div>
                  </div>
                ) : (
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    backgroundColor: playerJerseyColor,
                    color: '#ffffff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: 22,
                    border: '3px solid #ffffff',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.7)'
                  }}>
                    {player.number}
                  </div>
                )}

                {/* Broadcast Name Plate */}
                <div style={{
                  backgroundColor: 'rgba(5, 11, 20, 0.95)',
                  color: '#ffffff',
                  padding: '3px 12px',
                  borderRadius: 6,
                  fontSize: 16,
                  marginTop: 2,
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                  borderBottom: `3px solid ${playerJerseyColor}`,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.6)'
                }}>
                  {player.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MatchdayComposition: React.FC<FootballMatchProps> = ({
  title,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  matchTime,
  stadium,
  fanClip,
  homeColor,
  awayColor,
  homeGkColor,
  awayGkColor,
  homeLineup,
  awayLineup,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#050b14', color: '#ffffff' }}>
      {/* Background Atmosphere Video */}
      {fanClip && (
        <OffthreadVideo
          src={fanClip}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
        />
      )}

      {/* Intro Match Title Scene (0 - 10 Secs) */}
      <Sequence from={0} durationInFrames={300}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 40 }}>
          <h2 style={{ fontSize: 48, color: '#f5c518', marginBottom: 20, letterSpacing: 2 }}>{title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, transform: `scale(${scale})`, margin: '30px 0' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={homeLogo} style={{ width: 140, height: 140, objectFit: 'contain' }} alt="Home" />
              <h1 style={{ fontSize: 36, marginTop: 15, color: homeColor }}>{homeTeam}</h1>
            </div>
            <h1 style={{ fontSize: 50, color: '#e50756', fontWeight: 'bold' }}>VS</h1>
            <div style={{ textAlign: 'center' }}>
              <img src={awayLogo} style={{ width: 140, height: 140, objectFit: 'contain' }} alt="Away" />
              <h1 style={{ fontSize: 36, marginTop: 15, color: awayColor }}>{awayTeam}</h1>
            </div>
          </div>
          <p style={{ fontSize: 30, color: '#00ffcc', fontWeight: 'bold' }}>{matchTime}</p>
          <p style={{ fontSize: 24, color: '#cccccc', marginTop: 10 }}>{stadium}</p>
        </AbsoluteFill>
      </Sequence>

      {/* Home Lineup Broadcast Scene (10 - 34 Secs) */}
      <Sequence from={300} durationInFrames={720}>
        <BroadcastPitchBoard
          teamName={homeTeam}
          logo={homeLogo}
          lineup={homeLineup}
          primaryColor={homeColor}
          gkColor={homeGkColor}
        />
      </Sequence>

      {/* Away Lineup Broadcast Scene (34 - 58 Secs) */}
      <Sequence from={1020} durationInFrames={720}>
        <BroadcastPitchBoard
          teamName={awayTeam}
          logo={awayLogo}
          lineup={awayLineup}
          primaryColor={awayColor}
          gkColor={awayGkColor}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
