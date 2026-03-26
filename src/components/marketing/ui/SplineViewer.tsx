import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineViewerProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

const SplineLoading = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 dark:bg-[#0a0a0f]/50 backdrop-blur-sm z-10">
    <div className="relative w-24 h-24">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-ping" />
      {/* Inner Rotating Ring */}
      <div className="absolute inset-2 rounded-full border-t-2 border-indigo-500 animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-indigo-500 tracking-widest uppercase">
        Loading 3D
      </div>
    </div>
  </div>
);

export const SplineViewer: React.FC<SplineViewerProps> = ({ scene, className = '', onLoad }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div className={`relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl ${className}`}>
      {loading && <SplineLoading />}
      <Suspense fallback={<SplineLoading />}>
        <Spline 
          scene={scene} 
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  );
};
