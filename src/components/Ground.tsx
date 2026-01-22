import React, { memo, useMemo } from 'react';
import { GAME_CONFIG, GAME_HEIGHT, GAME_WIDTH } from '../constants/gameConfig';

interface GroundProps {
  offset: number;
}

const GroundComponent: React.FC<GroundProps> = ({ offset }) => {
  const height = GAME_CONFIG.groundHeight;
  const top = GAME_HEIGHT - height;

  // 컨테이너 스타일 메모이제이션
  const containerStyle = useMemo<React.CSSProperties>(() => ({
    position: 'absolute',
    left: 0,
    top: top,
    width: GAME_WIDTH,
    height: height,
    overflow: 'hidden'
  }), [height, top]);

  // 땅 패턴 스타일 (offset만 동적)
  const groundPatternStyle = useMemo<React.CSSProperties>(() => ({
    position: 'absolute',
    top: 0,
    width: GAME_WIDTH * 3,
    height: height,
    background: `repeating-linear-gradient(
      90deg,
      #DEB887 0px,
      #DEB887 20px,
      #D2B48C 20px,
      #D2B48C 40px
    )`,
    borderTop: '4px solid #8B4513',
    willChange: 'left'
  }), [height]);

  return (
    <div style={containerStyle}>
      {/* 반복되는 땅 패턴 */}
      <div
        style={{
          ...groundPatternStyle,
          left: -(offset % GAME_WIDTH)
        }}
      >
        {/* 잔디 효과 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 20,
            background: `repeating-linear-gradient(
              90deg,
              #228B22 0px,
              #228B22 5px,
              #32CD32 5px,
              #32CD32 10px
            )`
          }}
        />
      </div>
    </div>
  );
};

export const Ground = memo(GroundComponent);
