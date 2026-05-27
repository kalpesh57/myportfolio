import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const ParticleBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Canvas>

        <ambientLight intensity={1} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />

      </Canvas>
    </div>
  );
};

export default ParticleBackground;