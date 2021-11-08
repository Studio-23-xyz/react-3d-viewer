import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import CanvasComponent from './Canvas/CanvasComponent';
import ControllerComponent from './Controller/ControllerComponent';
import './Visualaizer.css';

import { createContext } from 'react';
export const ControlData = createContext();

const  Visualaizer= ({ visualaizer, setVisualaizer }) => {
	// const [visualaizer, setVisualaizer] = useState({
	// 	enableRotation: true,
	// 	rotationSpeed: 10,
	// 	rotationTopLimit: 1,
	// 	rotationBottomLimit: 2,
	// 	zoomEnable: true,
	// 	zoomInLimit: 30,
	// 	zoomOutLimit: 9,
	// 	background: {
	// 		value: '#0dcaf0',
	// 		type: 'plainBackground',
	// 	},
	// 	loading: true,
	// 	model: '',
	// });

	const [loading, setLoading] = useState(true);
	return (
		<ControlData.Provider
			value={{
				visualaizer,
				setVisualaizer,
				loading,
				setLoading,
			}}
		>
			<div className="homeComponent" id="homeComponent">
				<h1 align="center" className="mb-3">
					3D Viewer
				</h1>
				<Row>
					<CanvasComponent />
					<ControllerComponent />
				</Row>
			</div>
		</ControlData.Provider>
	);
};

export default Visualaizer;
