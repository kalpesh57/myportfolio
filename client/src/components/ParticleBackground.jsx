import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Stars,
  Float,
} from "@react-three/drei";

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

        <ambientLight intensity={0.8} />

        <pointLight
          position={[10, 10, 10]}
          color="#915EFF"
        />

        <pointLight
          position={[-10, -10, -10]}
          color="#00ffff"
        />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >

          <mesh>

            <icosahedronGeometry
              args={[2, 1]}
            />

            <meshStandardMaterial
              color="#915EFF"
              wireframe
            />

          </mesh>

        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </div>

  );

};

export default ParticleBackground;