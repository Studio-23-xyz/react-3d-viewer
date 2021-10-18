import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Rotation from './Rotation';
import Zoom from './Zoom';
import Background from './Background/Background';
import UploadModel from './UploadModel';
const ControllerComponent = () => {
	return (
		<Col md="5" id= "conficComponent">
			<div className="config-section-header">
				<h6>Configuration</h6>
			</div>
			<Accordion>
				<Rotation />
				<Zoom />
				<Background />
				<UploadModel />
			</Accordion>
		</Col>
	);
};

export default ControllerComponent;
