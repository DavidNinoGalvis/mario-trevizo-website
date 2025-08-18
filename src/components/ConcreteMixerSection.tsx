'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  useGLTF,
  ContactShadows,
  Html,
  Preload,
  AdaptiveDpr,
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Timer, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

function ConcreteMixer({ url = '/models/concrete-mixer.glb' }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = false;
        obj.receiveShadow = true;
        const mat = obj.material as THREE.MeshStandardMaterial | undefined;
        if (mat) {
          mat.envMapIntensity = 0.5;
          mat.roughness = Math.min(0.9, mat.roughness ?? 0.8);
          mat.metalness = Math.max(0.0, mat.metalness ?? 0.0);
        }
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]} scale={[0.45, 0.45, 0.45]}>
      <primitive object={scene} position={[-0.8, 0, 0]} />
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-2 text-gray-800 shadow">
        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            opacity=".25"
          />
          <path
            d="M22 12a10 10 0 0 0-10-10"
            stroke="currentColor"
            strokeWidth="4"
            opacity=".9"
          />
        </svg>
        <span>Cargando modelo…</span>
      </div>
    </Html>
  );
}

export default function ConcreteMixerSection() {
  const { messages } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Solo renderizar en el cliente para evitar problemas de SSR con Three.js
  if (!isClient) {
    return (
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-8 md:py-12">
            <div className="w-full max-w-xl text-left">
              <h2 className="flex items-center gap-3 text-4xl font-bold tracking-tight md:text-5xl">
                <Timer className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                {messages.concreteMixer.title}
              </h2>
              <ul className="mt-5 space-y-3 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />
                  <span>{messages.concreteMixer.items[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />
                  <span>{messages.concreteMixer.items[1]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck
                    className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />
                  <span>{messages.concreteMixer.items[2]}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div className="mx-auto aspect-square w-full max-w-md flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
                <p>Cargando modelo 3D...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="elegirnos" className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-2">
        {/* Columna izquierda */}
        <div className="flex items-center justify-center px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl text-left"
          >
            <h2 className="flex items-center gap-3 text-4xl font-bold tracking-tight md:text-5xl">
              <Timer className="h-8 w-8 text-yellow-400" aria-hidden="true" />
              {messages.concreteMixer.title}
            </h2>

            <ul className="mt-5 space-y-3 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <BadgeCheck
                  className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                  aria-hidden="true"
                />
                <span>{messages.concreteMixer.items[0]}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                  aria-hidden="true"
                />
                <span>{messages.concreteMixer.items[1]}</span>
              </li>
              <li className="flex items-start gap-3">
                <Truck
                  className="mt-1 h-6 w-6 shrink-0 text-yellow-400"
                  aria-hidden="true"
                />
                <span>{messages.concreteMixer.items[2]}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Columna derecha */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto aspect-square w-full max-w-md">
            <Canvas
              shadows
              className="h-full w-full"
              dpr={[1, 1.25]}
              camera={{ position: [0, 0, 8], fov: 35, near: 0.1, far: 50 }}
              gl={{ antialias: false, powerPreference: 'high-performance' }}
            >
              <color attach="background" args={['#000000']} />

              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.5} />
                <directionalLight
                  intensity={1.4}
                  position={[3, 4, 3]}
                  castShadow
                  shadow-mapSize-width={512}
                  shadow-mapSize-height={512}
                />
                <directionalLight intensity={0.5} position={[-2, 2, -2]} />

                <ConcreteMixer url="/models/concrete-mixer.glb" />

                <ContactShadows
                  position={[0, -1, 0]}
                  opacity={0.35}
                  blur={1.2}
                  far={4}
                  resolution={256}
                  frames={1}
                />

                <Environment preset="warehouse" />
                <AdaptiveDpr pixelated />
                <Preload all />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload('/models/concrete-mixer.glb');
