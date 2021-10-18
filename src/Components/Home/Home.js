import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CanvasComponent from './Canvas/CanvasComponent';
import ControllerComponent from './Controller/ControllerComponent';

const Home = () => {
	return (
		<div className="homeComponent" id="homeComponent">
			<h1 align="center" className="mb-3">
				3D Viewer
			</h1>
			<Row>
				<CanvasComponent />
				<ControllerComponent />
			</Row>
		</div>
	);
};

export default Home;
