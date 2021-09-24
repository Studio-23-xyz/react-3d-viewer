import React, { useContext } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'drei';
import { Physics } from 'use-cannon';
import { ControlData } from '../../../App';
import { Col, Spinner } from 'react-bootstrap';
const CanvasComponent = () => {
	const {
		enableRotation,
		rotationSpeed,
		rotationLimit,
		zoomEnable,
		zoomLimit,
		background,
		model,
		loading,
		setLoading,
	} = useContext(ControlData);
	setTimeout(() => {
		setLoading(false);
	}, 3000);

	let finalModel = require('../../../Models/fire.fbx').default;

	let Model = () => {
		const fbx = useLoader(FBXLoader, finalModel);
		return <primitive object={fbx} position={[0, -1, 0]} />;
	};
	if (model) {
		finalModel = model.url;
		if (model.extension === 'fbx') {
		} else if (model.extension === 'obj') {
			Model = () => {
				const obj = useLoader(OBJLoader, finalModel);
				return <primitive object={obj} position={[0, -1, 0]} />;
			};
		} else if (model.extension === 'gltf') {
			Model = () => {
				const gltf = useLoader(GLTFLoader, finalModel);

				return <primitive object={gltf.scene} position={[0, -1, 0]} />;
			};
		}
	} else {
		finalModel = require('../../../Models/fire.fbx').default;
	}
	let backgroundStyle;
	if (background.type === 'plainBackground') {
		backgroundStyle = background.value;
	} else {
		let tbg = require(`../../../Background/${background.value}`).default;
		backgroundStyle = `url(${tbg})`;
	}

	function Zoom() {
		useFrame((state) => {
			state.camera.fov = zoomLimit * -1;
			state.camera.updateProjectionMatrix();
		});
		return null;
	}

	return (
		<Col md="7">
			{loading ? (
				<div
					className=" d-flex justify-content-md-center align-items-center m-0"
					id="loading_indicator"
				>
					<Spinner animation="border" variant="info" />
				</div>
			) : (
				<Canvas
					style={{ background: backgroundStyle }}
					id="renderCanvas"
					width="650"
					height="600"
					className="canvas-style"
					camera={{ position: [0, 0, 300], fov: 75 }}
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
					<Zoom />
				</Canvas>
			)}
		</Col>
	);
};

export default CanvasComponent;
