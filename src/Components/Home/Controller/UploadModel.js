import React, { useContext } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { ControlData } from '../../../App';

const UploadModel = () => {
	const { setModel } = useContext(ControlData);

	const fileUpload = (e) => {
		const url = URL.createObjectURL(e[0]);
		setModel(url);
	};
	return (
		<Accordion.Item eventKey="4">
			<Accordion.Header className="according-btn">
				Upload A model
			</Accordion.Header>
			<Accordion.Body>
				<div className="upload_model">
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Upload a glb file</Form.Label>
						<Form.Control
							type="file"
							onChange={(e) => fileUpload(e.target.files)}
						/>
					</Form.Group>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default UploadModel;
