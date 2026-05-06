import React, { useRef, useLayoutEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export function SceneContent() {
  const { camera, scene } = useThree();
  const modelRef = useRef<THREE.Group>(null);
  
  // Load the GLB file from public folder
  const { scene: modelScene } = useGLTF('/realistic_animals_full_pack.glb');

  useLayoutEffect(() => {
    // Setup initial camera position
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrub
      }
    });

    // We animate the camera and the model group
    // Section 1 to Section 2 (Anatomy)
    tl.to(camera.position, {
      x: 3,
      y: 1,
      z: 4,
      ease: 'power2.inOut'
    }, 0);
    
    if (modelRef.current) {
      tl.to(modelRef.current.rotation, {
        y: Math.PI / 2,
        ease: 'power1.inOut'
      }, 0);
    }

    // Section 2 to Section 3 (Horn)
    tl.to(camera.position, {
      x: -2,
      y: 2,
      z: 3,
      ease: 'power2.inOut'
    }, '+=0');
    
    if (modelRef.current) {
      tl.to(modelRef.current.rotation, {
        y: Math.PI,
        x: -0.2,
        ease: 'power1.inOut'
      }, '<');
    }

    // Section 3 to Section 4 (Outro)
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 15,
      ease: 'power3.inOut'
    }, '+=0');

    if (modelRef.current) {
      tl.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        x: 0,
        ease: 'power1.inOut'
      }, '<');
    }

    return () => {
      tl.kill();
    };
  }, [camera]);

  // Gentle floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={modelRef}>
      {/* 3D Model from User */}
      <Center>
        <primitive object={modelScene} scale={0.5} />
      </Center>
      
      {/* Some floating particles to make it look premium */}
      <Particles count={300} />
    </group>
  );
}

function Particles({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  useLayoutEffect(() => {
    if (!mesh.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.scale.setScalar(Math.random() * 0.05 + 0.01);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="#d6cebc" transparent opacity={0.3} />
    </instancedMesh>
  );
}
