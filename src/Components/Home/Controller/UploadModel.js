import React, { useContext, useState } from 'react';
import { Accordion, ButtonGroup, Form, Button } from 'react-bootstrap';
import { ControlData } from '../../../App';

const UploadModel = () => {
	const { setModel } = useContext(ControlData);
	const [uploadType, setUploadType] = useState('file');
	const [file, setFile] = useState();
	const [url, setUrl] = useState();

	const fileUpload = (e) => {
		console.log(e);
		if (e === undefined || e.length < 1) {
			alert('no file selected');
		} else {
			var re = /(?:\.([^.]+))?$/;

			var ext = re.exec(e[0].name)[1]; // "txt

			if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
				alert(
					'please select a valid file, only supported glb/gltf, fbx and obj file'
				);
			} else if (
				ext === 'gltf' ||
				ext === 'glb' ||
				ext === 'obj' ||
				ext === 'fbx'
			) {
				console.log(e.length);
				const url = URL.createObjectURL(e[0]);
				setModel({ url: url, extension: ext });
			}
		}
	};
	const urlLoad = (e) => {
		if (e === '') {
			alert('no url selected');
		} else {
			var re = /(?:\.([^.]+))?$/;

			var ext = re.exec(e)[1]; // "txt
			if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
				alert(
					'please select a valid url,only supported glb/gltf, fbx and obj url'
				);
			} else if (
				ext === 'gltf' ||
				ext === 'glb' ||
				ext === 'obj' ||
				ext === 'fbx'
			) {
				const url = e;
				setModel({ url: url, extension: ext });
			}
		}
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
