'use client';

import { Scene } from '@/components/scene/Scene';
import { ControlHUD } from '@/components/ui/ControlHUD';

export default function Home() {
  return (
    <main className="w-full h-screen relative bg-kenya-dark">
      <Scene />
      <ControlHUD />
      
      {/* Title Overlay */}
      <div className="fixed top-4 left-4 z-50">
        <h1 className="text-4xl font-bold text-kenya-green font-mono tracking-wider mb-2">
          4DKENYA
        </h1>
        <p className="text-sm text-kenya-teal font-mono">
          Higher-Dimensional Visualization Engine
        </p>
      </div>
    </main>
  );
}

