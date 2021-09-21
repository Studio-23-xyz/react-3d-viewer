import React from 'react';
import { useContext } from 'react';
import { ControlData } from '../../../App';
import { Accordion, Col, Row } from 'react-bootstrap';

const Zoom = () => {
	const { zoomEnable, setZoomEnable, zoomLimit, setZoomLimit } =
		useContext(ControlData);
	return (
		<Accordion.Item eventKey="1">
			<Accordion.Header className="according-btn">Zoom</Accordion.Header>
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
						min="-100"
						max="-10"
						step="10"
						id="zoom_limit"
					/>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Zoom;
