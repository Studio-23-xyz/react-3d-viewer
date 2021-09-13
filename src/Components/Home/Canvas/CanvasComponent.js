import React, { useContext } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'drei';
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
		model,
	} = useContext(ControlData);
	let finalModel = require('../../../Models/carModel.gltf').default;

	if (model) {
		console.log(model);
		finalModel = model;
	} else {
		finalModel = require('../../../Models/carModel.gltf').default;
	}
	function Model(url) {
		const gltf = useLoader(GLTFLoader, finalModel);
		return <primitive object={gltf.scene} position={[0, -1, 0]} />;
	}

	return (
		<Col md="7">
			<Canvas
				style={{ background: background }}
				id="renderCanvas"
				width="650"
				height="600"
				className="canvas-style"
				camera={{ position: [0, 0, 70], fov: zoomLimit }}
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
						<Model />
					</mesh>
				</Physics>
			</Canvas>
		</Col>
	);
};

export default CanvasComponent;
