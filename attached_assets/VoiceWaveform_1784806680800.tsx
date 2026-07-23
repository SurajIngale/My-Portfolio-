import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const WaveShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0.2, 0.6, 1.0) },
    uMouse: { value: new THREE.Vector2(0, 0) }
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Distance from mouse for interaction
      float dist = distance(uv, uMouse);
      float interaction = smoothstep(0.5, 0.0, dist);
      
      // Complex wave equation
      float elevation = sin(pos.x * 3.0 + uTime * 2.0) * 0.2;
      elevation += sin(pos.x * 10.0 + uTime * 1.5) * 0.05;
      elevation += sin(pos.y * 5.0 + uTime * 1.0) * 0.1;
      
      // Interaction effect
      elevation += sin(pos.x * 20.0 + uTime * 5.0) * 0.1 * interaction;
      
      pos.z = elevation;
      vElevation = elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vElevation;

    void main() {
      float alpha = (vElevation + 0.3) * 1.5;
      vec3 color = uColor + vElevation * 0.8; 
      gl_FragColor = vec4(color, alpha);
    }
  `
};

const Wave = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#008A7F') }, // Primary Teal
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }
    }),
    []
  );

  useFrame((state: RootState) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.getElapsedTime();
      // Smooth mouse interaction
      material.current.uniforms.uMouse.value.lerp(
        new THREE.Vector2(
          (state.pointer.x + 1) / 2,
          (state.pointer.y + 1) / 2
        ),
        0.1
      );
    }
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[12, 6, 128, 64]} />
      <shaderMaterial
        ref={material}
        args={[WaveShaderMaterial]}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

const Particles = () => {
  const count = 200;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() * 0.02;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshPhongMaterial color="#00f2ff" emissive="#00f2ff" />
    </instancedMesh>
  );
};

export const VoiceWaveform = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#020617', 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Wave />
        <Particles />
      </Canvas>
    </div>
  );
};
