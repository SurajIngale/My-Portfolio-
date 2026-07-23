import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface BootIntroProps {
  onComplete: () => void;
}

export const BootIntro: React.FC<BootIntroProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 7 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <Spline 
        scene="https://prod.spline.design/5KYulm6h7aSt3LMR/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
};
