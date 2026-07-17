import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";

function Helix() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y += 0.01;
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  const spheres = [];

  for (let i = 0; i < 80; i++) {
    const angle = i * 0.35;

    const x1 = Math.cos(angle) * 2;
    const z1 = Math.sin(angle) * 2;

    const x2 = Math.cos(angle + Math.PI) * 2;
    const z2 = Math.sin(angle + Math.PI) * 2;

    const y = (i - 40) * 0.25;

    spheres.push(
      <group key={i}>
        <Sphere args={[0.13]} position={[x1, y, z1]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={2}
          />
        </Sphere>

        <Sphere args={[0.13]} position={[x2, y, z2]}>
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={2}
          />
        </Sphere>

        <mesh position={[0, y, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    );
  }

  return <group ref={group}>{spheres}</group>;
}

export default function DNAHelix3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>

      <ambientLight intensity={0.4} />

      <pointLight position={[10, 10, 10]} intensity={4} />

      <Helix />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />

    </Canvas>
  );
}