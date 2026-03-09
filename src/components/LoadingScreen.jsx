import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const FabricMesh = () => {
  const mesh = useRef();
  const materialRef = useRef();
  const geometryRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime || (performance.now() / 1000);
    const pos = mesh.current.geometry.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 0.5 + t) * Math.cos(y * 0.3 + t * 0.7) * 0.4;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  useEffect(() => {
    return () => {
      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, []);
  
  return (
    <mesh ref={mesh} rotation={[-0.3, 0, 0]}>
      <planeGeometry ref={geometryRef} args={[12, 8, 64, 64]} />
      <meshStandardMaterial 
        ref={materialRef}
        color="#121212"
        metalness={0.4}
        roughness={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const rendererRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => {
      clearInterval(interval);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
      }
    };
  }, [onComplete]);

  const logoLetters = "SHOP.CO".split("");

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl }) => {
            rendererRef.current = gl;
            gl.setClearColor(0x0a0a0a);
          }}
        >
          <FabricMesh />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#E8FF00" />
          <Environment preset="studio" />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex mb-4 overflow-hidden">
          {logoLetters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="font-display text-7xl md:text-9xl text-chalk inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-[10px] text-smoke tracking-[0.5em] uppercase"
        >
          Loading Collection... {progress}%
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-[#E8FF00] to-white"
        />
      </div>

      <AnimatePresence>
        {progress === 100 && (
          <motion.div 
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.84, 0] }}
            className="absolute inset-0 bg-[#E8FF00] z-[10000]"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;
