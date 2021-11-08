import { useState } from 'react';
import './App.css';
import Visualaizer from './Components/Visualaizer';
function App() {
	const [controlVisualaizer, setControlVisualaizer] = useState({
		rotationSpeed: 10,
	});
	return (
		<>
			<Visualaizer
				controlVisualaizer={controlVisualaizer}
				setControlVisualaizer={setControlVisualaizer}
			/>
		</>
	);
}

export default App;
