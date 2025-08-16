"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ScrollControls,
  useGLTF,
  useScroll,
  ContactShadows,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Timer, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

function ConcreteMixer({ url = "/models/concrete-mixer.glb" }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  // Ajustes de materiales y sombras
  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = true;
      if (obj.material) {
        obj.material.envMapIntensity = 0.4;
        obj.material.roughness = Math.min(0.95, obj.material.roughness ?? 0.8);
        obj.material.metalness = Math.max(0.0, obj.material.metalness ?? 0.0);
      }
    }
  });

  // Animación automática de rotación
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5; // Gira automáticamente
      group.current.scale.setScalar(0.45);
    }
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <primitive
      ref={group}
      object={scene}
      rotation={[0, 0, 0]}
      position={[0, -1, 0]}
    />
  );
}

export default function ConcreteMixerSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl mx-auto">
        {/* Columna izquierda - Texto (SOLO esta parte fue modificada) */}
        <div className="flex items-center justify-center px-4 py-6 md:py-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
              <Timer className="w-8 h-8 text-yellow-400" />
              ¿Por qué elegirnos?
            </h2>

            <ul className="mt-5 space-y-3 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <BadgeCheck className="w-6 h-6 mt-1 shrink-0 text-yellow-400" />
                <span>
                  <strong>Compromiso real</strong> y cumplimiento en cada
                  proyecto.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 mt-1 shrink-0 text-yellow-400" />
                <span>
                  <strong>Concreto de alta calidad</strong> con estándares
                  constantes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="w-6 h-6 mt-1 shrink-0 text-yellow-400" />
                <span>
                  <strong>Servicio personalizado</strong> y cobertura en
                  cualquier sector.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Columna derecha - Canvas 3D (SIN CAMBIOS) */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full aspect-square max-w-md mx-auto">
            <Canvas
              shadows
              className="w-full h-full"
              dpr={[1, 2]}
              camera={{
                position: [0, 0, 8],
                fov: 35,
                near: 0.1,
                far: 50,
              }}
              gl={{
                antialias: true,
                powerPreference: "high-performance",
              }}
            >
              <color attach="background" args={[0x000000]} />

              <Suspense fallback={null}>
                <ScrollControls pages={2} damping={0.2}>
                  <group>
                    <ambientLight intensity={0.5} />
                    <directionalLight
                      intensity={1.8}
                      position={[3, 4, 3]}
                      castShadow
                      shadow-mapSize-width={1024}
                      shadow-mapSize-height={1024}
                    />
                    <directionalLight intensity={0.6} position={[-2, 2, -2]} />
                  </group>

                  <ConcreteMixer url="/models/concrete-mixer.glb" />

                  <ContactShadows
                    position={[0, -1, 0]}
                    opacity={0.4}
                    blur={1}
                    far={4}
                    resolution={512}
                  />

                  <Environment preset="warehouse" />
                </ScrollControls>
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

useGLTF.preload("/models/concrete-mixer.glb");
