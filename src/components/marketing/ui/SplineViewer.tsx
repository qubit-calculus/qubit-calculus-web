import React, { Suspense, useState, useEffect } from 'react';
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

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

class SplineErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Spline Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const SplineViewer: React.FC<SplineViewerProps> = ({ scene, className = '', onLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Timeout for loading: if it takes more than 10s, show error
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setError('Loading took too long. Please check the 3D scene public access.');
        setLoading(false);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [loading]);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = (e: any) => {
    console.error('Spline onError handler:', e);
    setError('Failed to load 3D scene. Please check if the scene is set to public.');
    setLoading(false);
  };

  const errorFallback = (
    <div className={`relative flex items-center justify-center bg-gray-50 dark:bg-white/[0.02] border border-dashed border-gray-300 dark:border-white/10 rounded-3xl min-h-[400px] ${className}`}>
      <div className="text-center p-6">
        <div className="text-4xl mb-2">🧊</div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">3D Asset Unavailable</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-[250px]">
          Failed to load 3D scene. Please ensure the Spline link is public.
        </p>
      </div>
    </div>
  );

  if (error) return errorFallback;

  return (
    <div className={`relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl ${className}`}>
      {loading && <SplineLoading />}
      <SplineErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<SplineLoading />}>
          <Spline 
            scene={scene} 
            onLoad={handleLoad}
            onError={handleError}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
};
