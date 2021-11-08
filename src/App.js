import { useState } from 'react';
import './App.css';
import Visualaizer from './Components/Visualaizer';
function App() {
	const [visualaizer, setVisualaizer] = useState({
		enableRotation: true,
		rotationSpeed: 10,
		rotationTopLimit: 1,
		rotationBottomLimit: 2,
		zoomEnable: true,
		zoomInLimit: 30,
		zoomOutLimit: 9,
		background: {
			value: '#0dcaf0',
			type: 'plainBackground',
		},
		loading: true,
		model: '',
	});
	return (
		<>
			<Visualaizer
				visualaizer={visualaizer}
				setVisualaizer={setVisualaizer}
			/>
		</>
	);
}

export default App;
