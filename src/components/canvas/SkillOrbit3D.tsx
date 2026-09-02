import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

interface SkillOrbit3DProps {
  onSelectSkill: (skillName: string) => void;
  selectedSkill: string | null;
}

export const SkillOrbit3D: React.FC<SkillOrbit3DProps> = ({ onSelectSkill, selectedSkill }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Flatten all skills
  const allSkills = SKILL_CATEGORIES.flatMap(cat =>
    cat.skills.map(skill => ({
      ...skill,
      category: cat.name,
      categoryId: cat.id
    }))
  );

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Central Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(22, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const centralSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(centralSphere);

    // Nodes for skills
    const nodeMeshes: { mesh: THREE.Mesh; skillName: string; originalPos: THREE.Vector3 }[] = [];
    const count = allSkills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden spiral angle

    const nodeGeo = new THREE.SphereGeometry(1.4, 16, 16);
    const highlightGeo = new THREE.SphereGeometry(1.8, 16, 16);

    const categoryColors: Record<string, number> = {
      programming: 0x38bdf8,   // Cyan
      'web-dev': 0x818cf8,      // Indigo
      'ai-genai': 0x34d399,     // Emerald
      'cloud-tools': 0xf59e0b   // Amber
    };

    allSkills.forEach((skill, i) => {
      // Fibonacci sphere distribution
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      const sphereRadius = 24;
      const pos = new THREE.Vector3(x * sphereRadius, y * sphereRadius, z * sphereRadius);

      const colorHex = categoryColors[skill.categoryId] || 0x38bdf8;
      const mat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: skill.highlight ? 0.95 : 0.75
      });

      const mesh = new THREE.Mesh(skill.highlight ? highlightGeo : nodeGeo, mat);
      mesh.position.copy(pos);
      globeGroup.add(mesh);

      nodeMeshes.push({ mesh, skillName: skill.name, originalPos: pos });
    });

    // Connecting lines between close nodes
    const linesGeo = new THREE.BufferGeometry();
    const lineCoords: number[] = [];

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1 = nodeMeshes[i].mesh.position;
        const p2 = nodeMeshes[j].mesh.position;
        if (p1.distanceTo(p2) < 22) {
          lineCoords.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    }

    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    globeGroup.add(linesMesh);

    // Mouse drag rotation & Raycasting
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.003, y: 0.004 };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.008;
        globeGroup.rotation.x += deltaY * 0.008;

        rotationVelocity = { x: deltaY * 0.001, y: deltaX * 0.001 };
        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Raycasting for hover
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
        if (intersects.length > 0) {
          const hit = nodeMeshes.find(n => n.mesh === intersects[0].object);
          if (hit) {
            setHoveredSkill(hit.skillName);
            container.style.cursor = 'pointer';
          }
        } else {
          setHoveredSkill(null);
          container.style.cursor = 'grab';
        }
      }
    };

    const onPointerUp = (e: MouseEvent) => {
      if (isDragging) {
        isDragging = false;
      }
      // Check for click
      const rect = container.getBoundingClientRect();
      const clickMouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      );
      raycaster.setFromCamera(clickMouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
      if (intersects.length > 0) {
        const hit = nodeMeshes.find(n => n.mesh === intersects[0].object);
        if (hit) {
          onSelectSkill(hit.skillName);
        }
      }
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

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
      const delta = clock.getDelta();

      if (!isDragging && !prefersReducedMotion) {
        globeGroup.rotation.y += 0.004;
        globeGroup.rotation.x += Math.sin(clock.getElapsedTime() * 0.5) * 0.001;
      }

      // Highlight selected or hovered node scale
      nodeMeshes.forEach(n => {
        const isSelected = n.skillName === selectedSkill;
        const isHovered = n.skillName === hoveredSkill;

        const targetScale = isSelected ? 1.7 : isHovered ? 1.4 : 1.0;
        n.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      sphereMat.dispose();
      nodeGeo.dispose();
      highlightGeo.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      renderer.dispose();
    };
  }, [onSelectSkill, selectedSkill, hoveredSkill]);

  return (
    <div className="relative w-full h-[360px] sm:h-[460px] flex items-center justify-center">
      <div
        id="skill-orbit-3d-canvas"
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      {hoveredSkill && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-full glass-panel border border-cyan-400/40 text-cyan-200 text-sm font-semibold tracking-wide shadow-lg shadow-cyan-950/40 animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {hoveredSkill} (Click to inspect)
        </div>
      )}
      <div className="absolute top-3 right-3 text-xs text-slate-400 glass-pill px-3 py-1.5 rounded-md pointer-events-none flex items-center gap-1.5 border border-white/5">
        <span className="text-cyan-400">●</span> 3D Orbital Universe • Drag to rotate
      </div>
    </div>
  );
};
