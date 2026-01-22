import { useCallback, useRef, useEffect } from 'react';

/**
 * 사운드 재생 훅
 * - 메모리 누수 방지를 위한 cleanup
 * - 동시에 여러 사운드 재생 가능
 */
export const useSound = (audioSrc: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio 객체 생성
    audioRef.current = new Audio(audioSrc);
    audioRef.current.preload = 'auto';
    audioRef.current.volume = 0.5; // 50% 볼륨

    return () => {
      // cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const play = useCallback(() => {
    if (audioRef.current) {
      // 이전 재생 중이면 처음부터 다시 재생
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.warn('Audio play failed:', error);
      });
    }
  }, []);

  return { play };
};
