import React from 'react';
import { useContext } from 'react';
//import { Loader } from 'drei';
import { Accordion, Col, Row } from 'react-bootstrap';
import { ControlData } from '../Visualaizer';
const Rotation = () => {
	const { visualaizer, setVisualaizer } = useContext(ControlData);
	const {
		enableRotation,
		rotationSpeed,
		rotationTopLimit,
		rotationBottomLimit,
	} = visualaizer;
	return (
		<Accordion.Item eventKey="0">
			<Accordion.Header className="according-btn">Rotation</Accordion.Header>
			<Accordion.Body>
				<Row className="mb-2">
					<Col md="8">Autorotation</Col>
					<Col md="4" className="d-flex justify-content-end">
						<div className="form-check form-switch">
							<input
								onChange={() =>
									setVisualaizer({
										...visualaizer,
										enableRotation: !enableRotation,
									})
								}
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
						onChange={e =>
							setVisualaizer({
								...visualaizer,
								rotationSpeed: parseInt(e.target.value),
							})
						}
						min="-50"
						max="50"
						step="5"
						id="rotation_speed"
					/>
				</div>
				<div className="rotation_limit">
					<p className="mb-1">Rotation Top Limit</p>
					<input
						type="range"
						className="form-range"
						value={rotationTopLimit}
						onChange={e =>
							setVisualaizer({
								...visualaizer,
								rotationTopLimit: parseInt(e.target.value),
							})
						}
						min="1"
						max="32"
						step="1"
						id="rotation_top_limit"
					/>
				</div>

				<div className="rotation_limit">
					<p className="mb-1">Rotation Bottom Limit</p>
					<input
						type="range"
						className="form-range"
						value={rotationBottomLimit}
						onChange={e =>
							setVisualaizer({
								...visualaizer,
								rotationBottomLimit: parseInt(e.target.value),
							})
						}
						min="1"
						max="32"
						step="0.5"
						id="rotation_bottom_limit"
					/>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Rotation;
