import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const Background3D = () => {
  const mountRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Color definitions
    const primaryColor = isDark ? 0x818cf8 : 0x6366f1;
    const cyanColor = isDark ? 0x22d3ee : 0x0891b2;
    const purpleColor = isDark ? 0xc084fc : 0x9333ea;
    const lineColor = isDark ? 0x4f46e5 : 0x6366f1;

    // 2. Neural Network Particle Constellation
    const particleCount = window.innerWidth < 768 ? 45 : 90;
    const maxDistance = 10;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.9,
      transparent: true,
      opacity: isDark ? 0.7 : 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    worldGroup.add(particles);

    // Constellation lines geometry & material
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    worldGroup.add(linesMesh);

    // 3. Floating 3D Geometric Objects with multi-layer wireframes
    const geometries = [
      new THREE.IcosahedronGeometry(3.6, 1),
      new THREE.OctahedronGeometry(2.9, 0),
      new THREE.TetrahedronGeometry(3.2, 0),
      new THREE.TorusGeometry(3.5, 0.45, 16, 50),
      new THREE.DodecahedronGeometry(2.5, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: primaryColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.24 : 0.12,
      }),
      new THREE.MeshBasicMaterial({
        color: cyanColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.28 : 0.14,
      }),
      new THREE.MeshBasicMaterial({
        color: purpleColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.22 : 0.1,
      }),
    ];

    const meshes = [];
    const positionsConfig = [
      { x: -24, y: 12, z: -8, rx: 0.003, ry: 0.005 },
      { x: 26, y: 9, z: -12, rx: -0.004, ry: 0.004 },
      { x: -20, y: -14, z: -6, rx: 0.004, ry: -0.003 },
      { x: 24, y: -13, z: -10, rx: 0.003, ry: 0.005 },
      { x: 0, y: -22, z: -15, rx: -0.002, ry: -0.004 },
    ];

    positionsConfig.forEach((cfg, idx) => {
      const geo = geometries[idx % geometries.length];
      const mat = materials[idx % materials.length];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.userData = {
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        speed: 0.7 + idx * 0.25,
        rx: cfg.rx,
        ry: cfg.ry,
      };
      worldGroup.add(mesh);
      meshes.push(mesh);
    });

    // 4. Parallax & Mouse Interactivity
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 3;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 3;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Parallax easing
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;

        worldGroup.rotation.y = currentMouseX * 0.12;
        worldGroup.rotation.x = currentMouseY * 0.12;

        // Animate particles & connect constellation lines
        const posAttr = particleGeometry.attributes.position;
        const lineAttr = lineGeometry.attributes.position;
        let lineVertexIndex = 0;

        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;

          posAttr.array[ix] += particleVelocities[i].x;
          posAttr.array[iy] += particleVelocities[i].y;
          posAttr.array[iz] += particleVelocities[i].z;

          // Bounce off boundaries
          if (Math.abs(posAttr.array[ix]) > 32) particleVelocities[i].x *= -1;
          if (Math.abs(posAttr.array[iy]) > 24) particleVelocities[i].y *= -1;
          if (Math.abs(posAttr.array[iz]) > 18) particleVelocities[i].z *= -1;

          // Check proximity to other particles for constellation lines
          for (let j = i + 1; j < particleCount; j++) {
            const jx = j * 3;
            const jy = j * 3 + 1;
            const jz = j * 3 + 2;

            const dx = posAttr.array[ix] - posAttr.array[jx];
            const dy = posAttr.array[iy] - posAttr.array[jy];
            const dz = posAttr.array[iz] - posAttr.array[jz];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
              lineAttr.array[lineVertexIndex++] = posAttr.array[ix];
              lineAttr.array[lineVertexIndex++] = posAttr.array[iy];
              lineAttr.array[lineVertexIndex++] = posAttr.array[iz];

              lineAttr.array[lineVertexIndex++] = posAttr.array[jx];
              lineAttr.array[lineVertexIndex++] = posAttr.array[jy];
              lineAttr.array[lineVertexIndex++] = posAttr.array[jz];
            }
          }
        }

        posAttr.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineVertexIndex / 3);
        lineAttr.needsUpdate = true;

        // Floating geometric objects animation
        meshes.forEach((mesh) => {
          mesh.rotation.x += mesh.userData.rx;
          mesh.rotation.y += mesh.userData.ry;
          mesh.position.y =
            mesh.userData.baseY + Math.sin(elapsedTime * mesh.userData.speed) * 1.6;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
