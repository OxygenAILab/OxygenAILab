import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';
import O2Molecule from './O2Molecule';
import MolecularBonds from './MolecularBonds';

const MOLECULE_COUNT = 32;
const FIELD_RADIUS = 7;
const BOND_THRESHOLD = 3.2;

/** 在球形空间内生成均匀分布的分子位置 */
function useMoleculePositions(count: number, radius: number) {
  return useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // 球内均匀采样
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * Math.cbrt(Math.random());
      positions.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ),
      );
    }
    return positions;
  }, [count, radius]);
}

/** 鼠标视差相机控制器 */
function ParallaxRig() {
  const mouse = useRef({ x: 0, y: 0 });
  useFrame((state) => {
    // 缓动跟随鼠标
    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.04;
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.04;
    state.camera.position.x = mouse.current.x * 1.2;
    state.camera.position.y = mouse.current.y * 0.8;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContent() {
  const positions = useMoleculePositions(MOLECULE_COUNT, FIELD_RADIUS);

  return (
    <>
      <ParallaxRig />

      {/* 光照 */}
      <ambientLight intensity={0.25} color="#a5f3fc" />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#22d3ee" distance={15} />
      <pointLight position={[8, 5, 5]} intensity={1.2} color="#67e8f9" distance={20} />
      <pointLight position={[-6, -4, -3]} intensity={0.8} color="#0891b2" distance={18} />

      {/* 分子场 */}
      {positions.map((pos, i) => (
        <O2Molecule
          key={i}
          index={i}
          position={[pos.x, pos.y, pos.z]}
          scale={0.7 + (i % 4) * 0.15}
        />
      ))}

      {/* 分子键网络 */}
      <MolecularBonds positions={positions} threshold={BOND_THRESHOLD} />

      {/* 后处理 */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette darkness={0.6} offset={0.3} />
        <Noise opacity={0.04} />
      </EffectComposer>
    </>
  );
}

export default function OxygenLatticeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 55, near: 0.1, far: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <SceneContent />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          rotateSpeed={0.4}
        />
        <AdaptiveDpr pixelated />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
