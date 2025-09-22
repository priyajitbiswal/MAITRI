import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useAnimations } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Robot Component
function Robot({ isThinking, hovered, setHovered }) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, '/models/futuristic_flying_animated_robot_-_low_poly.glb');
  const { actions, mixer } = useAnimations(gltf.animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach(action => action.play());
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
      const targetScale = hovered ? 1.05 : 1;
      group.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, delta * 5);
    }
  });

  return (
    <group ref={group} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// Loading Component
const LoadingRobot = () => {
  const ref = useRef();
  useFrame(state => ref.current && (ref.current.rotation.y = state.clock.elapsedTime));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.8, 1, 0.6]} />
      <meshStandardMaterial color="#00d4ff" wireframe />
    </mesh>
  );
};

// Thought Bubble
function ThoughtBubble({ message, visible }) {
  const ref = useRef();
  useFrame(state => ref.current && (ref.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.08));

  if (!visible || !message) return null;

  return (
    <group ref={ref} position={[1.3, 0.4, 0]} scale={0.8}>
      <Html center distanceFactor={7} transform style={{
        background: 'rgba(0, 15, 30, 0.95)', border: '1px solid #00d4ff', borderRadius: '8px',
        padding: '10px 14px', color: '#00d4ff', fontFamily: 'Space Mono, monospace',
        fontSize: '12px', width: '220px', minHeight: '60px', textAlign: 'center',
        boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1.3'
      }}>
        {message}
        <div style={{
          position: 'absolute', left: '-6px', top: '50%', transform: 'translateY(-50%) rotate(45deg)',
          width: '8px', height: '8px', background: 'rgba(0, 15, 30, 0.95)', border: '1px solid #00d4ff',
          borderTop: 'none', borderRight: 'none'
        }} />
      </Html>
    </group>
  );
}

// Main Component
const AIAssistant = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCurrentMessage("Hello! I'm MAITRI, your AI assistant for psychological and physical well-being. I'm here to help you!");
      setShowBubble(true);
      setIsThinking(false);
    }, 2000);
  }, []);

  return (
    <section className="ai-assistant-panel">
      <div className="panel-header">
        <h2>🧠 PSYCHOLOGICAL SUPPORT</h2>
        <div className="status">
          <div className="status-dot"></div>
          {isThinking ? 'THINKING' : 'LISTENING'}
        </div>
      </div>
      
      <div className="ai-assistant-container">
        <Canvas camera={{ position: [0, 0, 4], fov: 55 }} style={{ background: 'transparent' }} gl={{ antialias: true }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[8, 8, 5]} intensity={1.2} castShadow />
          <pointLight position={[0, 4, 2]} intensity={0.8} color="#00d4ff" />
          <pointLight position={[-3, 1, 3]} intensity={0.4} color="#ffffff" />

          <group position={[-1.8, 0, 0]} scale={1.7}>
            <Suspense fallback={<LoadingRobot />}>
              <Robot isThinking={isThinking} hovered={hovered} setHovered={setHovered} />
            </Suspense>
          </group>
          
          <ThoughtBubble message={currentMessage} visible={showBubble} />
          
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} />
        </Canvas>
      </div>
    </section>
  );
};

export default AIAssistant; 