import React, { memo } from 'react';
import { Position } from '../types/game';

interface HitEffectProps {
  position: Position;
  visible: boolean;
}

/**
 * 단순 피격 이펙트
 * - 셔틀콕을 칠 때 표시되는 충격 효과
 */
const HitEffectComponent: React.FC<HitEffectProps> = ({ position, visible }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x - 30,
        top: position.y - 30,
        width: 60,
        height: 60,
        pointerEvents: 'none',
        zIndex: 100
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* 중앙 임팩트 */}
        <circle
          cx="30"
          cy="30"
          r="8"
          fill="#FFD700"
          opacity="0.8"
        >
          <animate
            attributeName="r"
            from="3"
            to="15"
            dur="0.15s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="0.15s"
            fill="freeze"
          />
        </circle>

        {/* 외부 파동 1 */}
        <circle
          cx="30"
          cy="30"
          r="15"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
          opacity="0.6"
        >
          <animate
            attributeName="r"
            from="8"
            to="25"
            dur="0.15s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="0.8"
            to="0"
            dur="0.15s"
            fill="freeze"
          />
        </circle>

        {/* 외부 파동 2 */}
        <circle
          cx="30"
          cy="30"
          r="20"
          fill="none"
          stroke="#FFA500"
          strokeWidth="2"
          opacity="0.4"
        >
          <animate
            attributeName="r"
            from="12"
            to="30"
            dur="0.15s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="0.6"
            to="0"
            dur="0.15s"
            fill="freeze"
          />
        </circle>

        {/* 충격 라인들 */}
        <g stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          {/* 상하좌우 충격선 */}
          <line x1="30" y1="15" x2="30" y2="5" opacity="0.8">
            <animate attributeName="opacity" from="1" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="10" to="0" dur="0.15s" fill="freeze" />
          </line>
          <line x1="30" y1="45" x2="30" y2="55" opacity="0.8">
            <animate attributeName="opacity" from="1" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="50" to="60" dur="0.15s" fill="freeze" />
          </line>
          <line x1="15" y1="30" x2="5" y2="30" opacity="0.8">
            <animate attributeName="opacity" from="1" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="10" to="0" dur="0.15s" fill="freeze" />
          </line>
          <line x1="45" y1="30" x2="55" y2="30" opacity="0.8">
            <animate attributeName="opacity" from="1" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="50" to="60" dur="0.15s" fill="freeze" />
          </line>

          {/* 대각선 충격선 */}
          <line x1="20" y1="20" x2="12" y2="12" opacity="0.6">
            <animate attributeName="opacity" from="0.8" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="15" to="8" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="15" to="8" dur="0.15s" fill="freeze" />
          </line>
          <line x1="40" y1="20" x2="48" y2="12" opacity="0.6">
            <animate attributeName="opacity" from="0.8" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="45" to="52" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="15" to="8" dur="0.15s" fill="freeze" />
          </line>
          <line x1="20" y1="40" x2="12" y2="48" opacity="0.6">
            <animate attributeName="opacity" from="0.8" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="15" to="8" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="45" to="52" dur="0.15s" fill="freeze" />
          </line>
          <line x1="40" y1="40" x2="48" y2="48" opacity="0.6">
            <animate attributeName="opacity" from="0.8" to="0" dur="0.15s" fill="freeze" />
            <animate attributeName="x2" from="45" to="52" dur="0.15s" fill="freeze" />
            <animate attributeName="y2" from="45" to="52" dur="0.15s" fill="freeze" />
          </line>
        </g>
      </svg>
    </div>
  );
};

export const HitEffect = memo(HitEffectComponent);
