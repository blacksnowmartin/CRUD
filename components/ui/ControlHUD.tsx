'use client';

import { use4DStore } from '@/lib/store/use4DStore';

export function ControlHUD() {
  const { rotationSpeeds, viewMode, setRotationSpeed, toggleWireframe, toggleHyperSurface } = use4DStore();

  const planes = [
    { key: 'xy' as const, label: 'XY Plane' },
    { key: 'xz' as const, label: 'XZ Plane' },
    { key: 'yz' as const, label: 'YZ Plane' },
    { key: 'xw' as const, label: 'XW Plane' },
    { key: 'yw' as const, label: 'YW Plane' },
    { key: 'zw' as const, label: 'ZW Plane' },
  ];

  return (
    <div className="fixed top-4 right-4 w-80 bg-kenya-darker/95 backdrop-blur-sm border border-kenya-green/30 rounded-lg p-6 shadow-2xl z-50">
      <h2 className="text-2xl font-bold text-kenya-green mb-6 font-mono tracking-wide">
        4D CONTROL PANEL
      </h2>

      {/* Rotation Speed Controls */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-kenya-teal mb-4 uppercase tracking-wider">
          Rotation Speeds
        </h3>
        <div className="space-y-4">
          {planes.map((plane) => (
            <div key={plane.key}>
              <label className="block text-xs text-gray-300 mb-2 font-mono">
                {plane.label}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="0.1"
                  step="0.001"
                  value={rotationSpeeds[plane.key]}
                  onChange={(e) => setRotationSpeed(plane.key, parseFloat(e.target.value))}
                  className="flex-1 h-2 bg-kenya-dark rounded-lg appearance-none cursor-pointer accent-kenya-green"
                />
                <span className="text-kenya-gold text-xs font-mono w-12 text-right">
                  {(rotationSpeeds[plane.key] * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Mode Toggles */}
      <div className="border-t border-kenya-green/20 pt-4">
        <h3 className="text-sm font-semibold text-kenya-teal mb-4 uppercase tracking-wider">
          View Mode
        </h3>
        <div className="space-y-3">
          <button
            onClick={toggleWireframe}
            className={`w-full px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              viewMode.wireframe
                ? 'bg-kenya-green text-kenya-dark font-bold'
                : 'bg-kenya-dark text-kenya-green border border-kenya-green/50 hover:border-kenya-green'
            }`}
          >
            {viewMode.wireframe ? '✓ WIREFRAME' : 'WIREFRAME'}
          </button>
          <button
            onClick={toggleHyperSurface}
            className={`w-full px-4 py-2 rounded-lg font-mono text-sm transition-all ${
              viewMode.hyperSurface
                ? 'bg-kenya-green text-kenya-dark font-bold'
                : 'bg-kenya-dark text-kenya-green border border-kenya-green/50 hover:border-kenya-green'
            }`}
          >
            {viewMode.hyperSurface ? '✓ HYPER-SURFACE' : 'HYPER-SURFACE'}
          </button>
        </div>
      </div>
    </div>
  );
}

