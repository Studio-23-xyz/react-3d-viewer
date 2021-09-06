import React from 'react';
import { Accordion } from 'react-bootstrap';

import { useContext } from 'react';
import { ControlData } from '../../../App';
const Background = () => {
	const { setBackground } = useContext(ControlData);
	return (
		<Accordion.Item eventKey="3">
			<Accordion.Header className="according-btn">Background</Accordion.Header>
			<Accordion.Body>
				<div className="accordion-body">
					<p className="mb-1">Background Color</p>
					<div className="background_colors">
						<div
							className="bc1 bg-info"
							onClick={() => setBackground('#0dcaf0')}
						></div>
						<div
							className="bc2 bg-danger"
							onClick={() => setBackground('#dc3545')}
						></div>
						<div
							className="bc3 bg-secondary"
							onClick={() => setBackground('#6c757d')}
						></div>
						<div
							className="bc4 bg-primary"
							onClick={() => setBackground('#0d6efd')}
						></div>
						<div
							className="bc4 bg-success"
							onClick={() => setBackground('#198754')}
						></div>
						<div
							className="bc4 bg-warning"
							onClick={() => setBackground('#ffc107')}
						></div>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Background;
