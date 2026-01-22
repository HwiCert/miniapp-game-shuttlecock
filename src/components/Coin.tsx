import React, { memo } from 'react';
import { Coin as CoinType } from '../types/game';
import { GAME_CONFIG } from '../constants/gameConfig';

interface CoinProps {
  coin: CoinType;
}

/**
 * 코인 컴포넌트
 * - 장애물 사이에 나타나는 수집 가능한 코인
 * - 금색 동전 디자인
 */
const CoinComponent: React.FC<CoinProps> = ({ coin }) => {
  const { x, y, collected } = coin;
  const size = GAME_CONFIG.coinSize;

  if (collected) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        willChange: 'left'
      }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20">
        {/* 코인 외곽 (금색) */}
        <circle
          cx="10"
          cy="10"
          r="9"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* 그라데이션 정의 */}
        <defs>
          <radialGradient id="goldGradient">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FF9800" />
          </radialGradient>
        </defs>
        
        {/* 코인 하이라이트 */}
        <ellipse
          cx="8"
          cy="7"
          rx="3"
          ry="4"
          fill="#FFED4E"
          opacity="0.6"
        />
        
        {/* 코인 중앙 심볼 ($ 또는 ●) */}
        <circle
          cx="10"
          cy="10"
          r="5"
          fill="none"
          stroke="#B8860B"
          strokeWidth="0.8"
        />
        
        {/* 숫자 또는 심볼 */}
        <text
          x="10"
          y="14"
          fontSize="10"
          fontWeight="bold"
          fill="#B8860B"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
        >
          ¢
        </text>
        
        {/* 반짝임 효과 */}
        <circle
          cx="6"
          cy="6"
          r="1.5"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

export const Coin = memo(CoinComponent);
