import { Accordion, Col, Container, Form, Row } from 'react-bootstrap';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from './Models/testfile.glb';
import { OrbitControls } from 'drei';
import { Physics } from 'use-cannon';
import './App.css';
import { useState } from 'react';

function App() {
	console.log(model);
	// const [autoRotate, setAutoRotate] = useState(true);
	const [enableRotation, setEnableRotation] = useState(true);
	const [rotationSpeed, setRotationSpeed] = useState(10);
	const [rotationLimit, setRotationLimit] = useState({
		max: 32,
		min: 2,
	});

	const [zoomEnable, setZoomEnable] = useState(true);
	const [zoomLimit, setZoomLimit] = useState(50);
	const [background, setBackground] = useState('#0dcaf0');

	const rotationLimitControl = (e) => {
		setRotationLimit({
			max: 32 - e,
			min: e,
		});
		console.log(rotationLimit);
	};

	function Model({ url }) {
		const gltf = useLoader(GLTFLoader, model);
		return <primitive object={gltf.scene} position={[0, -1, 0]} />;
	}

	return (
		<div>
			<Container>
				<h1 align="center" className="mb-3" style={{ color: background }}>
					3d Viewer
				</h1>
				<Row>
					<Col md="7">
						<Canvas
							style={{ background: background }}
							id="renderCanvas"
							width="650"
							height="600"
							className="canvas-style"
							camera={{ position: [0, 0, 4], fov: zoomLimit }}
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
					<Col md="5">
						<div className="config-section-header">
							<h6>Configuration</h6>
						</div>
						<Accordion>
							<Accordion.Item eventKey="0">
								<Accordion.Header className="according-btn">
									Rotation
								</Accordion.Header>
								<Accordion.Body>
									<Row className="mb-2">
										<Col md="8">Autorotation</Col>
										<Col md="4" className="d-flex justify-content-end">
											<div className="form-check form-switch">
												<input
													onChange={() => setEnableRotation(!enableRotation)}
													className="form-check-input"
													type="checkbox"
													id="autoRotationControl"
													checked={enableRotation}
												/>
											</div>
										</Col>
									</Row>
									<div className="rotation_speed">
										<p className="mb-1">Autorotation speed</p>
										<input
											type="range"
											className="form-range"
											value={rotationSpeed}
											onChange={(e) =>
												setRotationSpeed(parseInt(e.target.value))
											}
											min="-50"
											max="50"
											step="5"
											id="rotation_speed"
										/>
									</div>
									<div className="rotation_limit">
										<p className="mb-1">Rotation View Angle</p>
										<input
											type="range"
											className="form-range"
											value={rotationLimit.min}
											onChange={(e) =>
												rotationLimitControl(parseInt(e.target.value))
											}
											min="2"
											max="32"
											step="2"
											id="rotation_limit"
										/>
									</div>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header className="according-btn">
									Zoom
								</Accordion.Header>
								<Accordion.Body>
									<Row className="mb-2">
										<Col md="8">Zoom Enable</Col>
										<Col md="4" className="d-flex justify-content-end">
											<div className="form-check form-switch">
												<input
													onChange={() => setZoomEnable(!zoomEnable)}
													className="form-check-input"
													type="checkbox"
													id="ZoomControl"
													checked={zoomEnable}
												/>
											</div>
										</Col>
									</Row>
									<div className="zoom_limit">
										<p className="mb-1">Zoom limit</p>
										<input
											onChange={(e) => setZoomLimit(parseInt(e.target.value))}
											type="range"
											className="form-range"
											value={zoomLimit}
											// onChange="zoomInLimit()"
											min="10"
											max="200"
											step="10"
											id="zoom_limit"
										/>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="3">
								<Accordion.Header className="according-btn">
									Background
								</Accordion.Header>
								<Accordion.Body>
									<div className="accordion-body">
										<p className="mb-1">Background Color</p>
										<div className="background_colors">
											<div
												className="bc1 bg-info"
												onClick={() => setBackground('#0dcaf0')}
											></div>
											<div
												className="bc2 bg-danger"
												onClick={() => setBackground('#dc3545')}
											></div>
											<div
												className="bc3 bg-secondary"
												onClick={() => setBackground('#6c757d')}
											></div>
											<div
												className="bc4 bg-primary"
												onClick={() => setBackground('#0d6efd')}
											></div>
											<div
												className="bc4 bg-success"
												onClick={() => setBackground('#198754')}
											></div>
											<div
												className="bc4 bg-warning"
												onClick={() => setBackground('#ffc107')}
											></div>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header className="according-btn">
									Upload A model
								</Accordion.Header>
								<Accordion.Body>
									<div className="upload_model">
										<Form.Group controlId="formFile" className="mb-3">
											<Form.Label>Upload a glb file</Form.Label>
											<Form.Control type="file" />
										</Form.Group>
									</div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
