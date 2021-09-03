import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CanvasComponent from './Canvas/CanvasComponent';
import ControllerComponent from './Controller/ControllerComponent';

const Home = () => {
	return (
		<Container>
			<h1 align="center" className="mb-3">
				3d Viewer
			</h1>
			<Row>
				<CanvasComponent />
				<ControllerComponent />
			</Row>
		</Container>
	);
};

export default Home;
