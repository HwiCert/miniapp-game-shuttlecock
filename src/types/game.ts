export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface Bird {
  position: Position;
  velocity: Velocity;
  rotation: number;
}

export interface Pipe {
  id: number;
  x: number;
  gapY: number;
  passed: boolean;
  hasCoin: boolean;
}

export interface Coin {
  id: number;
  x: number;
  y: number;
  collected: boolean;
}

export type GameState = 'ready' | 'playing' | 'gameOver';

export interface GameConfig {
  gravity: number;
  jumpVelocity: number;
  birdSize: number;
  pipeWidth: number;
  pipeGap: number;
  pipeGapMin: number;
  pipeSpeed: number;
  pipeSpeedMax: number;
  pipeSpawnInterval: number;
  groundHeight: number;
  coinSize: number;
  coinProbability: number;
  difficultyIncreaseRate: number;
}
