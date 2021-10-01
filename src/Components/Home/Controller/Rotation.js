import React from 'react';
import { useContext } from 'react';
//import { Loader } from 'drei';
import { Accordion, Col, Row } from 'react-bootstrap';
import { ControlData } from '../../../App';
const Rotation = () => {
	const {
		enableRotation,
		setEnableRotation,
		rotationSpeed,
		setRotationSpeed,
		rotationLimit,
		setRotationLimit,
	} = useContext(ControlData);
	const rotationLimitControl = (e) => {
		setRotationLimit({
			max: 32 - e,
			min: e,
		});
		console.log(rotationLimit);
	};
	return (
		<Accordion.Item eventKey="0">
			<Accordion.Header className="according-btn">Rotation</Accordion.Header>
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
						onChange={(e) => setRotationSpeed(parseInt(e.target.value))}
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
						onChange={(e) => rotationLimitControl(parseInt(e.target.value))}
						min="2"
						max="32"
						step="2"
						id="rotation_limit"
					/>		
				</div>				
			</Accordion.Body>
		</Accordion.Item>		
	);
};

export default Rotation;
