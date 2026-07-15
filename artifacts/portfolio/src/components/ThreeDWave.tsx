import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Enhanced parameters for more realistic 3D waves
  // Enhanced parameters for more realistic 3D waves
  const count = 5000; // Reduced particle count for softer, less dense waves
  const xRange = 50;  // Wider horizontal range
  const zRange = 35;  // Deeper range for better 3D depth
  
  // Create particles with better distribution
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const depths = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create wave-like distribution
      const x = (Math.random() - 0.5) * xRange;
      const z = (Math.random() - 0.5) * zRange;
      
      positions[i3] = x;     // x
      positions[i3 + 1] = 0; // y (will be animated)
      positions[i3 + 2] = z; // z
      
      // Vary scale based on depth for perspective
      const depthFactor = (z + zRange / 2) / zRange; // 0 to 1
      scales[i] = 0.5 + Math.random() * 1.5;
      depths[i] = depthFactor;
    }
    
    return { positions, scales, depths };
  }, []);

  // Enhanced shader uniforms
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorPrimary: { value: new THREE.Color('#00FFF5') },   // Very bright cyan
    uColorSecondary: { value: new THREE.Color('#00D4C8') }, // Bright teal
    uColorDeep: { value: new THREE.Color('#008A7F') },      // Medium teal
  }), []);

  useFrame((state) => {
    if (pointsRef.current && pointsRef.current.material) {
      // @ts-ignore
      pointsRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Slower, more elegant rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  // Enhanced Custom Shader Material with proper 3D wave physics
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
      uniform float uTime;
      attribute float aScale;
      attribute float aDepth;
      
      varying float vElevation;
      varying float vDepth;
      varying float vAlpha;
      varying vec3 vPosition;
      
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // Multiple overlapping wave patterns for realistic 3D effect
        float wave1 = sin(modelPosition.x * 0.2 + uTime * 0.3) * 0.8; // Reduced amplitude
        float wave2 = sin(modelPosition.z * 0.25 + uTime * 0.25) * 0.7; // Reduced amplitude
        float wave3 = sin(modelPosition.x * 0.1 - modelPosition.z * 0.15 + uTime * 0.4) * 0.5; // Reduced amplitude
        
        // Cross-wave interference for more natural look
        float crossWave = sin(modelPosition.x * 0.3 + modelPosition.z * 0.25 + uTime * 0.35) * 0.6;
        
        // Combine waves with varying amplitudes
        float elevation = wave1 + wave2 + wave3 + crossWave;
        
        // Add depth-based variation (waves are calmer in the distance)
        elevation *= (1.0 - aDepth * 0.3);
        
        modelPosition.y += elevation;
        
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        
        gl_Position = projectedPosition;
        
        // Softer particle sizes
        float depthSize = mix(6.0, 15.0, 1.0 - aDepth);
        gl_PointSize = aScale * depthSize;
        
        // Pass varying values to fragment shader
        vElevation = elevation;
        vDepth = aDepth;
        vPosition = modelPosition.xyz;
        
        // Higher alpha for better visibility
        vAlpha = mix(1.0, 0.7, aDepth);
      }
    `,
    fragmentShader: `
      uniform vec3 uColorPrimary;
      uniform vec3 uColorSecondary;
      uniform vec3 uColorDeep;
      uniform float uTime;
      
      varying float vElevation;
      varying float vDepth;
      varying float vAlpha;
      varying vec3 vPosition;
      
      void main() {
        // Circular particle shape with soft edges
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // Soft circular falloff
        float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
        if (alpha < 0.01) discard;
        
        // Color based on elevation and depth for 3D effect
        float elevationFactor = (vElevation + 3.0) / 6.0; // Normalize elevation
        
        // Mix colors based on depth and elevation - BRIGHTER
        vec3 color = mix(uColorDeep, uColorSecondary, vDepth);
        color = mix(color, uColorPrimary, elevationFactor * 0.8);
        
        // Add MORE glow to peaks
        float glow = smoothstep(1.0, 3.0, vElevation);
        color += uColorPrimary * glow * 0.5;
        
        // Final alpha with depth fade - HIGHER VALUES
        float finalAlpha = alpha * vAlpha * 0.9;
        
        gl_FragColor = vec4(color, finalAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), [uniforms]);

  return (
    <points ref={pointsRef} material={material}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={particles.scales.length}
          array={particles.scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aDepth"
          count={particles.depths.length}
          array={particles.depths}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  );
};

export const ThreeDWave: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 4, 10], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <WaveParticles />
      </Canvas>
    </div>
  );
};
