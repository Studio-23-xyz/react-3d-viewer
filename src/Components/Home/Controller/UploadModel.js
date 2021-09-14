import React, { useContext, useState } from 'react';
import { Accordion, ButtonGroup, Form, Button } from 'react-bootstrap';
import { ControlData } from '../../../App';

const UploadModel = () => {
	const { setModel } = useContext(ControlData);
	const [uploadType, setUploadType] = useState('file');
	const [file, setFile] = useState();
	const [url, setUrl] = useState();

	const fileUpload = (e) => {
		if (e[0]) {
			const url = URL.createObjectURL(e[0]);
			setModel(url);
		}
	};
	const urlLoad = (e) => {
		console.log(e);
	};
	return (
		<Accordion.Item eventKey="4">
			<Accordion.Header className="according-btn">
				Upload A model
			</Accordion.Header>
			<Accordion.Body>
				<ButtonGroup className="mb-2 w-100">
					<Button variant="info" onClick={() => setUploadType('file')}>
						File Upload
					</Button>
					<Button onClick={() => setUploadType('url')}>Url Upload</Button>
				</ButtonGroup>
				<div className="upload_model">
					{uploadType === 'file' ? (
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Upload a gltf file</Form.Label>
							<Form.Control
								type="file"
								onChange={(e) => setFile(e.target.files)}
							/>
							<Button
								className="w-100 mt-3"
								variant="success"
								onClick={() => fileUpload(file)}
							>
								File Upload
							</Button>
						</Form.Group>
					) : (
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Gltf model url</Form.Label>
							<Form.Control
								type="text"
								onChange={(e) => setUrl(e.target.value)}
							/>
							<Button
								className="w-100 mt-3"
								variant="success"
								onClick={() => urlLoad(url)}
							>
								Url Upload
							</Button>
						</Form.Group>
					)}
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default UploadModel;
