import './App.css';
import { useState } from 'react';
import Home from './Components/Home/Home';
import { createContext } from 'react';

export const ControlData = createContext();

function App() {
	const [enableRotation, setEnableRotation] = useState(true);
	const [rotationSpeed, setRotationSpeed] = useState(10);
	const [rotationTopLimit, setRotationTopLimit] = useState(1);
	const [rotationBottomLimit, setRotationBottomLimit] = useState(2);

	const [zoomEnable, setZoomEnable] = useState(true);
	const [zoomInLimit, setZoomInLimit] = useState(30);
	const [zoomOutLimit, setZoomOutLimit] = useState(9);
	const [background, setBackground] = useState({
		value: '#0dcaf0',
		type: 'plainBackground',
	});
	const [loading, setLoading] = useState(true);
	const [model, setModel] = useState();

	return (
		<ControlData.Provider
			value={{
				enableRotation,
				setEnableRotation,
				rotationSpeed,
				setRotationSpeed,
				rotationTopLimit,
				setRotationTopLimit,
				rotationBottomLimit,
				setRotationBottomLimit,
				zoomEnable,
				setZoomEnable,
				zoomInLimit,
				setZoomInLimit,
				zoomOutLimit,
				setZoomOutLimit,
				background,
				setBackground,
				model,
				setModel,
				loading,
				setLoading,
			}}
		>
			<Home />
		</ControlData.Provider>
	);
}

export default App;
