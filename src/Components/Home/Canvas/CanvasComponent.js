import React, { useContext } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Gmodel from '../../../Models/test.gltf';
import Fmodel from '../../../Models/jeep.fbx';
import { OrbitControls, useGLTFLoader, useFBXLoader } from 'drei';
import { Physics } from 'use-cannon';
import { ControlData } from '../../../App';
import { Col } from 'react-bootstrap';
const CanvasComponent = () => {
	const {
		enableRotation,
		rotationSpeed,
		rotationLimit,
		zoomEnable,
		zoomLimit,
		background,
	} = useContext(ControlData);
	
	//Function for GLTF/GLB
	function GModel({ url }) {
		const gltf = useGLTFLoader (Gmodel, true);
		return <primitive object={gltf.scene} position={[0, -1, 0]} />;
	}
	
	//Function for FBX
	function FModel({ url }) {
		const fbx = useFBXLoader (Fmodel, true);
		return <primitive object={fbx} position={[0, -1, 0]} />;
	}
	return (
		<Col md="7">
			<Canvas
				style={{ background: background }}
				id="renderCanvas"
				width="650"
				height="600"
				className="canvas-style"
				camera={{ position: [0, 0, 800], fov: zoomLimit }}
			>
				<ambientLight intensity={0.5} />
				<spotLight intensity={0.5} position={[25, 25, 25]} angle={0.1} />
				<Physics>
					<OrbitControls
						minPolarAngle={Math.PI / rotationLimit.max}
						maxPolarAngle={Math.PI / rotationLimit.min}
						enableZoom={zoomEnable}
						autoRotate={enableRotation}
						autoRotateSpeed={rotationSpeed}
					/>
					<mesh>
						<FModel />
					</mesh>
				</Physics>
			</Canvas>
		</Col>
	);
};

export default CanvasComponent;
