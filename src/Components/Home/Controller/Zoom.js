import React from 'react';
import { useContext } from 'react';
import { ControlData } from '../../../App';
import { Accordion, Col, Row } from 'react-bootstrap';

const Zoom = () => {
	const { 
		zoomEnable, 
		setZoomEnable, 
		zoomInLimit,
		zoomOutLimit, 
		setZoomInLimit, 
		setZoomOutLimit 
	} =	useContext(ControlData);
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
				<div className="zoom_in_limit">
					<p className="mb-1">Zoom In limit</p>
					<input
						onChange={(e) => setZoomInLimit(parseInt(e.target.value))}
						type="range"
						className="form-range"
						value={zoomInLimit}
						// onChange="zoomInLimit()"
						min="10"
						max="50"
						step="4"
						id="zoom_in_limit"
					/>
				</div>
				<div className="zoom_out_limit">
					<p className="mb-1">Zoom Out limit</p>
					<input
						onChange={(e) => setZoomOutLimit(parseInt(e.target.value))}
						type="range"
						className="form-range"
						value={zoomOutLimit}
						// onChange="zoomOutLimit()"
						min="4"
						max="14"
						step="1"
						id="zoom_out_limit"
					/>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Zoom;
