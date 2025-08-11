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

  // Animación con scroll
  const scroll = useScroll();
  useFrame((state, delta) => {
    const t = scroll.offset;
    const targetRotX = THREE.MathUtils.lerp(-0.1, 0.1, t);
    const targetRotY = THREE.MathUtils.lerp(0, 0.3, t);
    const targetRotZ = THREE.MathUtils.lerp(0, 0.05, t);

    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetRotX,
        4,
        delta
      );
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetRotY,
        4,
        delta
      );
      group.current.rotation.z = THREE.MathUtils.damp(
        group.current.rotation.z,
        targetRotZ,
        4,
        delta
      );
      // Escala más pequeña para que quepa completo
      group.current.scale.setScalar(0.4);
    }

    state.camera.lookAt(0, 0, 0);
  });

  return (
    <primitive
      ref={group}
      object={scene}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
  );
}

export default function ConcreteMixerSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        {/* Columna izquierda - Texto */}
        <div className="flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Concrete Mixer 3D
            </h2>
            <p className="mt-4 max-w-lg mx-auto opacity-80 text-lg">
              Scroll down to see the animation.
            </p>
          </motion.div>
        </div>

        {/* Columna derecha - Canvas 3D */}
        <div className="relative flex items-center justify-center">
          <div className="w-full h-full max-w-2xl max-h-2xl">
            <Canvas
              shadows
              className="w-full h-full"
              dpr={[1, 2]}
              camera={{
                position: [0, 0, 5],
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

      {/* Contenido después del scroll */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 py-24">
        <h3 className="text-2xl md:text-3xl font-semibold">Why this works</h3>
        <ul className="mt-4 space-y-2 list-disc list-inside text-white/90">
          <li>Scroll controls drive camera and model tilt.</li>
          <li>Contact shadows and HDRI add realism.</li>
          <li>Optimized GLB keeps performance high.</li>
        </ul>
      </div>
    </section>
  );
}

useGLTF.preload("/models/concrete-mixer.glb");
