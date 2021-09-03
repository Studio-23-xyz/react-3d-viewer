import './App.css';
import { useState } from 'react';
import Home from './Components/Home/Home';
import { createContext } from 'react';

export const ControlData = createContext();

function App() {
	const [enableRotation, setEnableRotation] = useState(true);
	const [rotationSpeed, setRotationSpeed] = useState(10);
	const [rotationLimit, setRotationLimit] = useState({
		max: 32,
		min: 2,
	});

	const [zoomEnable, setZoomEnable] = useState(true);
	const [zoomLimit, setZoomLimit] = useState(50);
	const [background, setBackground] = useState('#0dcaf0');

	return (
		<ControlData.Provider
			value={{
				enableRotation,
				setEnableRotation,
				rotationSpeed,
				setRotationSpeed,
				rotationLimit,
				setRotationLimit,
				zoomEnable,
				setZoomEnable,
				zoomLimit,
				setZoomLimit,
				background,
				setBackground,
			}}
		>
			<Home></Home>
		</ControlData.Provider>
	);
}

export default App;
