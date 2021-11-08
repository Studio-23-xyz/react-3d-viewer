import React, { Suspense, useContext } from 'react';
import './Canvas.css';
import { Col, Spinner, Button } from 'react-bootstrap';
import { RiScreenshot2Fill } from 'react-icons/ri';
import { BiFullscreen } from 'react-icons/bi';

import html2canvas from 'html2canvas';
import { ControlData } from '../VisualaizerRaj';
const CanvasView = React.lazy(() => import('./CanvasView.js'));
const CanvasComponent = () => {
	const { setLoading } = useContext(ControlData);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	let fullScreen = false;

	const fullScreenControl = () => {
		if (fullScreen === false) {
			document
				.getElementById('homeComponent')
				.classList.remove('homeComponent');
			document
				.getElementById('homeComponent')
				.classList.add('homeComponentFullScreen');
			document.getElementById('canvasComponent').classList.remove('col-md-7');
			document.getElementById('canvasComponent').classList.add('col-md-12');
			document
				.getElementById('renderCanvas')
				.classList.add('canvas-style-change');
			document.getElementById('renderCanvas').classList.remove('canvas-style');
			document.getElementById('conficComponent').classList.add('display-nome');
			fullScreen = true;
		} else {
			document.getElementById('homeComponent').classList.add('homeComponent');
			document
				.getElementById('homeComponent')
				.classList.remove('homeComponentFullScreen');
			document.getElementById('canvasComponent').classList.add('col-md-7');
			document.getElementById('canvasComponent').classList.remove('col-md-12');
			document.getElementById('renderCanvas').classList.remove('renderCanvas');
			document
				.getElementById('conficComponent')
				.classList.remove('display-nome');
			document.getElementById('renderCanvas').classList.add('canvas-style');
			document
				.getElementById('renderCanvas')
				.classList.remove('canvas-style-change');
			fullScreen = false;
		}
	};
	const screenShotControl = () => {
		html2canvas(document.getElementById('renderCanvas')).then(function (
			canvas
		) {
			var data = canvas.toDataURL('image/jpeg', 0.9);
			var src = encodeURI(data);

			const a = document.createElement('a');
			a.href = src;
			a.download = 'canvas.png';
			a.click();
		});
	};
	return (
		<Col md="7" className="canvasComponent" id="canvasComponent">
			<>
				<div className="canvasControl">
					<Button variant="light" onClick={() => fullScreenControl()}>
						<BiFullscreen />
					</Button>
					<Button variant="light" onClick={() => screenShotControl()}>
						<RiScreenshot2Fill />
					</Button>
				</div>
				<Suspense
					fallback={
						<div
							className=" d-flex justify-content-md-center align-items-center m-0"
							id="loading_indicator"
						>
							<Spinner animation="border" variant="info" />
						</div>
					}
				>
					<CanvasView />
				</Suspense>
			</>
			)
		</Col>
	);
};

export default CanvasComponent;
