import axios from 'axios';
import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const UploadModel = () => {
	const fileUpload = (e) => {
		let data = new FormData();
		data.append('file', e[0]);
		axios
			.post(
				'https://run.mocky.io/v3/ff66833d-38a7-43fb-8153-1c68ac15bdfc',
				data
			)
			.then((res) => {
				console.log(res);
			});
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
