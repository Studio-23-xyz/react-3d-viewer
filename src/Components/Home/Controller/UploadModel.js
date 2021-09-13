import React, { useContext, useState } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { ControlData } from '../../../App';
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';

const UploadModel = () => {
	const { model, setModel } = useContext(ControlData);

	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	const fileUpload = (e) => {
		console.log(encode(e[0]));
		const url = URL.createObjectURL(e[0]);
		setModel(url);

		// const formData = new FormData();

		// formData.append('picture', e[0]);

		// const res = await fetch('http://localhost:4000/picture', {
		// 	method: 'POST',
		// 	body: formData,
		// }).then((res) => {
		// 	console.log(res);
		// 	setModel(e[0].name);
		// 	return res.json();
		// });

		// alert(JSON.stringify(res));
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
