import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroBackground3DProps {
  interactive?: boolean;
}

export const HeroBackground3D: React.FC<HeroBackground3DProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080d, 0.0018);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 220;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0ea5e9, 2.5, 400);
    pointLight.position.set(50, 50, 100);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0x6366f1, 1.8, 400);
    secondaryLight.position.set(-80, -60, 80);
    scene.add(secondaryLight);

    // 1. Neural Network Nodes & Connecting Lines
    const nodeCount = isMobile ? 35 : 70;
    const maxDistance = isMobile ? 45 : 55;
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];

    // Nodes geometry & instanced/individual spheres
    const sphereGeo = new THREE.SphereGeometry(1.2, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85
    });

    const nodeGlowMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 220,
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 120
      );
      nodePositions.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.08
        )
      );

      const sphereMesh = new THREE.Mesh(sphereGeo, i % 3 === 0 ? nodeGlowMat : nodeMat);
      sphereMesh.position.copy(pos);
      sphereMesh.scale.setScalar(0.7 + Math.random() * 0.8);
      nodesGroup.add(sphereMesh);
    }

    // Dynamic Lines Geometry between nearby nodes
    const maxLines = nodeCount * 5;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // 2. Floating Futuristic Wireframe Geometric Objects
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    // Icosahedron wireframe
    const icoGeo = new THREE.IcosahedronGeometry(18, 1);
    const wireMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeo, wireMat1);
    icoMesh.position.set(70, 25, -20);
    shapesGroup.add(icoMesh);

    // Octahedron wireframe
    const octaGeo = new THREE.OctahedronGeometry(14, 0);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const octaMesh = new THREE.Mesh(octaGeo, wireMat2);
    octaMesh.position.set(-75, -20, -10);
    shapesGroup.add(octaMesh);

    // Torus wireframe
    const torusGeo = new THREE.TorusGeometry(12, 1.2, 8, 24);
    const wireMat3 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const torusMesh = new THREE.Mesh(torusGeo, wireMat3);
    torusMesh.position.set(0, -45, 10);
    torusMesh.rotation.x = Math.PI / 3;
    shapesGroup.add(torusMesh);

    // 3. Subtle background particle galaxy
    const particleCount = isMobile ? 120 : 300;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 450;
      particlePos[i + 1] = (Math.random() - 0.5) * 350;
      particlePos[i + 2] = (Math.random() - 0.5) * 300;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 1.5 : 2.2,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (event.clientX - windowHalfX) * 0.0006;
      targetMouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        camera.position.x += (mouseX * 50 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 40 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);

        // Slow ambient scene rotation
        nodesGroup.rotation.y = elapsedTime * 0.03 + mouseX * 0.5;
        nodesGroup.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08 + mouseY * 0.3;

        // Floating geometric shapes rotation & hover
        icoMesh.rotation.x = elapsedTime * 0.15;
        icoMesh.rotation.y = elapsedTime * 0.2;
        icoMesh.position.y = 25 + Math.sin(elapsedTime * 0.8) * 4;

        octaMesh.rotation.x = -elapsedTime * 0.18;
        octaMesh.rotation.z = elapsedTime * 0.12;
        octaMesh.position.y = -20 + Math.cos(elapsedTime * 0.9) * 3.5;

        torusMesh.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.2;
        torusMesh.rotation.z = elapsedTime * 0.1;

        // Particles slow drift
        particles.rotation.y = elapsedTime * 0.01;
      }

      // Update node positions and line connections
      let lineIndex = 0;
      const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const colAttr = lineGeometry.attributes.color as THREE.BufferAttribute;

      const sphereChildren = nodesGroup.children as THREE.Mesh[];

      for (let i = 0; i < nodeCount; i++) {
        const p = nodePositions[i];
        const v = nodeVelocities[i];

        if (!prefersReducedMotion) {
          p.add(v);

          // Bounce back within bounds
          if (p.x > 110 || p.x < -110) v.x *= -1;
          if (p.y > 80 || p.y < -80) v.y *= -1;
          if (p.z > 60 || p.z < -60) v.z *= -1;
        }

        if (sphereChildren[i]) {
          sphereChildren[i].position.copy(p);
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = nodePositions[j];
          const dist = p.distanceTo(p2);

          if (dist < maxDistance && lineIndex < maxLines) {
            const alpha = 1.0 - dist / maxDistance;

            const idx = lineIndex * 6;
            linePositions[idx] = p.x;
            linePositions[idx + 1] = p.y;
            linePositions[idx + 2] = p.z;
            linePositions[idx + 3] = p2.x;
            linePositions[idx + 4] = p2.y;
            linePositions[idx + 5] = p2.z;

            // Cyan to blue glow interpolation
            const r = 0.12 * alpha;
            const g = (0.6 + 0.3 * Math.sin(elapsedTime + i)) * alpha;
            const b = 0.95 * alpha;

            lineColors[idx] = r;
            lineColors[idx + 1] = g;
            lineColors[idx + 2] = b;
            lineColors[idx + 3] = r;
            lineColors[idx + 4] = g;
            lineColors[idx + 5] = b;

            lineIndex++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex * 2);
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      sphereGeo.dispose();
      nodeMat.dispose();
      nodeGlowMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeo.dispose();
      wireMat1.dispose();
      octaGeo.dispose();
      wireMat2.dispose();
      torusGeo.dispose();
      wireMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      id="hero-3d-canvas-container"
      ref={mountRef}
      className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
