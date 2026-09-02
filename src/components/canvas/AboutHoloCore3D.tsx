import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AboutHoloCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Core holographic sphere & nested wireframe icosahedron
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerSphereGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // Outer geometric cage
    const outerGeo = new THREE.IcosahedronGeometry(5.2, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const outerCage = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerCage);

    // Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(6.8, 0.08, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.5
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 4;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(7.6, 0.08, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = -Math.PI / 6;
    scene.add(ring2);

    // Orbiting satellites/data nodes
    const nodeCount = 8;
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    const nodeGeo = new THREE.SphereGeometry(0.35, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 7.2, (Math.random() - 0.5) * 3, Math.sin(angle) * 7.2);
      nodesGroup.add(node);
    }

    // Pointer hover interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        coreGroup.rotation.x = elapsed * 0.3 + mouseY;
        coreGroup.rotation.y = elapsed * 0.4 + mouseX;

        ring1.rotation.z = elapsed * 0.2;
        ring1.rotation.x = Math.PI / 4 + Math.sin(elapsed * 0.5) * 0.2;

        ring2.rotation.y = elapsed * -0.25;
        nodesGroup.rotation.y = elapsed * 0.35;

        // Subtle pulsing
        const scale = 1 + Math.sin(elapsed * 2) * 0.05;
        innerSphere.scale.setScalar(scale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="about-holo-core-container"
      ref={mountRef}
      className="w-full h-[280px] sm:h-[340px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
};
