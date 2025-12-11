import { create } from 'zustand';

interface RotationSpeeds {
  xy: number;
  xz: number;
  yz: number;
  xw: number;
  yw: number;
  zw: number;
}

interface ViewMode {
  wireframe: boolean;
  hyperSurface: boolean;
}

interface FourDStore {
  rotationSpeeds: RotationSpeeds;
  viewMode: ViewMode;
  setRotationSpeed: (plane: keyof RotationSpeeds, speed: number) => void;
  toggleWireframe: () => void;
  toggleHyperSurface: () => void;
}

export const use4DStore = create<FourDStore>((set) => ({
  rotationSpeeds: {
    xy: 0.01,
    xz: 0.01,
    yz: 0.01,
    xw: 0.02,
    yw: 0.02,
    zw: 0.02,
  },
  viewMode: {
    wireframe: true,
    hyperSurface: false,
  },
  setRotationSpeed: (plane, speed) =>
    set((state) => ({
      rotationSpeeds: {
        ...state.rotationSpeeds,
        [plane]: speed,
      },
    })),
  toggleWireframe: () =>
    set((state) => ({
      viewMode: {
        ...state.viewMode,
        wireframe: !state.viewMode.wireframe,
      },
    })),
  toggleHyperSurface: () =>
    set((state) => ({
      viewMode: {
        ...state.viewMode,
        hyperSurface: !state.viewMode.hyperSurface,
      },
    })),
}));

