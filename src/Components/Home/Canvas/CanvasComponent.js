import React, { useContext } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import './Canvas.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'drei';
import { Physics } from 'use-cannon';
import { ControlData } from '../../../App';
import { Col, Spinner, Button} from 'react-bootstrap';
import { RiScreenshot2Fill } from 'react-icons/ri';
import { BiFullscreen } from 'react-icons/bi';
const CanvasComponent = () => {
	const {
		enableRotation,
		rotationSpeed,
		rotationTopLimit,
		rotationBottomLimit,
		zoomEnable,
		zoomInLimit,
		zoomOutLimit,
		background,
		model,
		loading,
		setLoading,
	} = useContext(ControlData);
	
	setTimeout(() => {
		setLoading(false);
	}, 3000);
	
	/*
	function radians_to_degrees(radians)
	{
	  var pi = Math.PI;
	  return radians * (180/pi);
	}
	 
	var angle= radians_to_degrees(Math.PI);
	*/

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
/*
	function Zoom() {
		useFrame((state) => {
		  state.camera.fov= zoomLimit*-1;
		  state.camera.updateProjectionMatrix()
		})
		return null
}*/
let fullScreen=false

const fullScreenControl=()=>{
	if(fullScreen===false){
		document.getElementById("homeComponent").classList.remove('homeComponent')
	document.getElementById("homeComponent").classList.add('homeComponentFullScreen')
	document.getElementById("canvasComponent").classList.remove('col-md-7')
	document.getElementById("canvasComponent").classList.add('col-md-12')
	document.getElementById("renderCanvas").classList.add('canvas-style-change')
	document.getElementById("renderCanvas").classList.remove('canvas-style')
	document.getElementById("conficComponent").classList.add('display-nome')
	fullScreen=true
	}else{
		document.getElementById("homeComponent").classList.add('homeComponent')
	document.getElementById("homeComponent").classList.remove('homeComponentFullScreen')
	document.getElementById("canvasComponent").classList.add('col-md-7')
	document.getElementById("canvasComponent").classList.remove('col-md-12')
	document.getElementById("renderCanvas").classList.remove('renderCanvas')
	document.getElementById("conficComponent").classList.remove('display-nome')
	document.getElementById("renderCanvas").classList.add('canvas-style')
	document.getElementById("renderCanvas").classList.remove('canvas-style-change')
	fullScreen=false
	}
}
const screenShopControl=()=>{
	console.log('its for screenshot')
}
	return (
		<Col md="7" className="canvasComponent" id="canvasComponent">
			{loading ? (
				<div
					className=" d-flex justify-content-md-center align-items-center m-0"
					id="loading_indicator"
				>
					<Spinner animation="border" variant="info" />
				</div>
			) : (
				<>
				<div className="canvasControl">
					<Button variant="light" onClick={()=>fullScreenControl()}>
						<BiFullscreen/>
					</Button> 
				<Button variant="light" onClick={()=>screenShopControl()}>
					<RiScreenshot2Fill/>
				</Button> 
				</div>
				<Canvas
					style={{ background: backgroundStyle }}
					id="renderCanvas"
					width="650"
					height="3000"
					className="canvas-style"
					orthographic camera={{ position: [0, 0, 50], zoom: 1, far: 100 }}
				>
					<ambientLight intensity={0.5} />
					<spotLight intensity={0.5} position={[25, 25, 25]} angle={0.1} />
					<Physics>
						<OrbitControls
							maxPolarAngle={Math.PI/ rotationTopLimit}
							minPolarAngle={Math.PI/ rotationBottomLimit}
							enableZoom={zoomEnable}
							maxZoom={zoomInLimit/10}
							minZoom={zoomOutLimit/10}
							autoRotate={enableRotation}
							autoRotateSpeed={rotationSpeed}
						/>

						<mesh>
							<Model />
						</mesh>
					</Physics>
				
				</Canvas>
				</>
			)}
		</Col> 	
	);
};

export default CanvasComponent;
