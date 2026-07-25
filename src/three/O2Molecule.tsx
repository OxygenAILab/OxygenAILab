import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface O2MoleculeProps {
  position: [number, number, number];
  scale?: number;
  index: number;
}

/**
 * O₂ 双球分子：两个氧原子球 + 中间化学键，自发光青色材质
 */
export default function O2Molecule({ position, scale = 1, index }: O2MoleculeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const atomRef1 = useRef<THREE.Mesh>(null);
  const atomRef2 = useRef<THREE.Mesh>(null);

  const radius = 0.38 * scale;
  const bondLength = 0.5 * scale;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // 各分子独立自转速度
      groupRef.current.rotation.y = t * 0.15 * (1 + (index % 5) * 0.1);
      groupRef.current.rotation.x = t * 0.08 * (1 + (index % 3) * 0.15);
      // 轻微漂浮
      groupRef.current.position.y = position[1] + Math.sin(t * 0.4 + index) * 0.15;
    }
    // 原子脉动发光
    const pulse = 0.6 + Math.sin(t * 1.2 + index * 0.7) * 0.4;
    if (atomRef1.current) {
      (atomRef1.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
    if (atomRef2.current) {
      (atomRef2.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* 氧原子 1 */}
      <mesh ref={atomRef1} position={[0, bondLength / 2, 0]}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* 氧原子 2 */}
      <mesh ref={atomRef2} position={[0, -bondLength / 2, 0]}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#67e8f9"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>
      {/* 化学键 */}
      <mesh>
        <cylinderGeometry args={[radius * 0.18, radius * 0.18, bondLength, 12]} />
        <meshStandardMaterial
          color="#0891b2"
          emissive="#22d3ee"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
