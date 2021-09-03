import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const UploadModel = () => {
	return (
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
	);
};

export default UploadModel;
