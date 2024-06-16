import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.lookAt(state.pointer.x, state.pointer.y, 1)));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color={hovered ? '#87c530' : '#2C5F2D'} />
    </mesh>
  );
}

const Graphic = () => {
	return (
	  <Canvas 
	  	className="graphic"
	  	camera={{fov: 80}}
	  >
	    <ambientLight intensity={Math.PI} />
	    {/*<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
	    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />*/}
	    <Box position={[17.2, -7.5, -10]} />
	  </Canvas>
	);
}

export default Graphic;