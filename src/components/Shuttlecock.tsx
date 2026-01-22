import React, { memo } from 'react';
import { Bird as BirdType } from '../types/game';
import { GAME_CONFIG } from '../constants/gameConfig';

interface ShuttlecockProps {
  bird: BirdType;
}

/**
 * 실제 셔틀콕 이미지 사용
 * - 이미지 URL 또는 로컬 이미지 사용
 */
const ShuttlecockComponent: React.FC<ShuttlecockProps> = ({ bird }) => {
  const { position, rotation } = bird;
  const size = GAME_CONFIG.birdSize;

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        transform: `rotate(${rotation + 90}deg)`, // 이미지 헤드가 위를 향하므로 +90도 회전
        willChange: 'transform, top, left'
      }}
    >
      <img
        src="/shuttlecock.png"
        alt="shuttlecock"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}
      />
    </div>
  );
};

export const Shuttlecock = memo(ShuttlecockComponent);
