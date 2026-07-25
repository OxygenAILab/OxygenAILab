import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MolecularBondsProps {
  positions: THREE.Vector3[];
  threshold: number;
}

/**
 * 分子键网络：距离阈值内的分子间用发光线段连接，形成有机网络
 */
export default function MolecularBonds({ positions, threshold }: MolecularBondsProps) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const { geometry, count } = useMemo(() => {
    const points: number[] = [];
    const thresholdSq = threshold * threshold;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const distSq = positions[i].distanceToSquared(positions[j]);
        if (distSq < thresholdSq) {
          points.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z,
          );
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return { geometry: geo, count: points.length / 6 };
  }, [positions, threshold]);

  useFrame((state) => {
    if (lineRef.current) {
      const t = state.clock.elapsedTime;
      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      // 整体网络透明度脉动
      mat.opacity = 0.15 + Math.sin(t * 0.6) * 0.08;
    }
  });

  if (count === 0) return null;

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}
