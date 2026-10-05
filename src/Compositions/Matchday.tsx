import React from 'react';
import { AbsoluteFill, OffthreadVideo, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FootballMatchProps } from '../types';

export const MatchdayComposition: React.FC<FootballMatchProps> = ({
  title,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  matchTime,
  stadium,
  fanClip,
  homeLineup,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: '#050b14', color: '#ffffff', fontFamily: 'Noto Sans Myanmar, Pyidaungsu, sans-serif' }}>
      {/* Background Fan Clip */}
      {fanClip && (
        <OffthreadVideo
          src={fanClip}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        />
      )}

      {/* Intro Section (0 to 15 Seconds - 450 frames) */}
      <Sequence from={0} durationInFrames={450}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 40 }}>
          <h2 style={{ fontSize: 50, color: '#f5c518', marginBottom: 20 }}>{title}</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, transform: `scale(${scale})`, margin: '40px 0' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={homeLogo} style={{ width: 160, height: 160, objectFit: 'contain' }} alt="Home" />
              <h1 style={{ fontSize: 42, marginTop: 15 }}>{homeTeam}</h1>
            </div>
            
            <h1 style={{ fontSize: 60, color: '#e50756', fontWeight: 'bold' }}>VS</h1>
            
            <div style={{ textAlign: 'center' }}>
              <img src={awayLogo} style={{ width: 160, height: 160, objectFit: 'contain' }} alt="Away" />
              <h1 style={{ fontSize: 42, marginTop: 15 }}>{awayTeam}</h1>
            </div>
          </div>

          <p style={{ fontSize: 32, color: '#00ffcc', fontWeight: 'bold' }}>{matchTime}</p>
          <p style={{ fontSize: 26, color: '#cccccc', marginTop: 10 }}>{stadium}</p>
        </AbsoluteFill>
      </Sequence>

      {/* Lineup Section (15 to 58 Seconds - 1290 frames) */}
      <Sequence from={450} durationInFrames={1290}>
        <AbsoluteFill style={{ padding: 40, alignItems: 'center' }}>
          <h2 style={{ fontSize: 45, color: '#f5c518', marginBottom: 30 }}>{homeTeam} ပွဲထွက်လူစာရင်း</h2>
          
          {/* Tactical Pitch Grid Container */}
          <div style={{
            width: '90%',
            height: '75%',
            border: '3px solid #00ffcc',
            borderRadius: 20,
            backgroundColor: 'rgba(0, 50, 20, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-around',
            padding: 20,
            boxShadow: '0 0 20px rgba(0, 255, 204, 0.3)'
          }}>
            {homeLineup && homeLineup.map((player, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '10px 20px',
                borderRadius: 10,
                margin: '4px 0'
              }}>
                <span style={{ fontSize: 28, color: '#f5c518', width: 50, fontWeight: 'bold' }}>#{player.number}</span>
                <span style={{ fontSize: 28, flex: 1 }}>{player.name}</span>
                <span style={{ fontSize: 22, color: '#00ffcc', backgroundColor: 'rgba(0,0,0,0.5)', padding: '4px 10px', borderRadius: 5 }}>{player.position}</span>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
