// Placeholder React Three Fiber scene — wire up shaders here as needed
// Usage: <BackgroundScene /> inside any screen that needs a WebGL background

import { Canvas } from '@react-three/fiber'

export default function BackgroundScene() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 5] }}
    >
      {/* Add R3F meshes / shader materials here */}
      <ambientLight intensity={0.5} />
    </Canvas>
  )
}
