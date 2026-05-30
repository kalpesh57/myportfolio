import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

const AnimatedSphere = () => {

  const meshRef = useRef();

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    const scale =
      1 +
      Math.sin(t * 2) * 0.15;

    meshRef.current.scale.set(
      scale,
      scale,
      scale
    );

  });

  return (

    <Float
      speed={4}
      rotationIntensity={4}
      floatIntensity={2}
    >

      <mesh ref={meshRef}>

        <icosahedronGeometry
          args={[2, 1]}
        />

        <meshStandardMaterial
          color="#915EFF"
          wireframe
        />

      </mesh>

    </Float>

  );

};

const LoaderSphere = () => {

  return (

    <Canvas>

      <ambientLight intensity={1} />

      <pointLight
        position={[5, 5, 5]}
        color="#915EFF"
      />

      <pointLight
        position={[-5, -5, -5]}
        color="#00ffff"
      />

      <AnimatedSphere />

    </Canvas>

  );

};

export default LoaderSphere;