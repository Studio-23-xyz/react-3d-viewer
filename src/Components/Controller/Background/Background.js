import React, { useState } from 'react';
import { Accordion, ButtonGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import PlainBackground from './PlainBackground';
import TextureBackground from './TextureBackground';
import { ControlData } from '../../VisualaizerRaj';
const Background = () => {
	const { visualaizer, setVisualaizer } = useContext(ControlData);
	const [backgroundType, setBackgroundType] = useState('plainBackground');
	const controlBackground = value => {
		setVisualaizer({
			...visualaizer,
			background: {
				value: value,
				type: backgroundType,
			},
		});
	};
	let plainBackground = [
		'#0dcaf0',
		'#dc3545',
		'#6c757d',
		'#0d6efd',
		'#198754',
		'#ffc107',
	];
	let textureBackground = ['tbg1.jpg', 'tbg2.jpg', 'tbg3.jpg'];

	return (
		<Accordion.Item eventKey="3">
			<Accordion.Header className="according-btn">Background</Accordion.Header>
			<Accordion.Body>
				<ButtonGroup className="mb-2 w-100">
					<Button
						variant="info"
						onClick={() => setBackgroundType('plainBackground')}
					>
						Plain Background
					</Button>
					<Button onClick={() => setBackgroundType('textureBackground')}>
						Texture Background
					</Button>
				</ButtonGroup>
				<div className="accordion-body">
					{backgroundType === 'plainBackground' ? (
						<div className="plain_background_colors">
							<p className="mb-1">Choose Plain Background Color</p>
							{plainBackground.map((v, index) => (
								<PlainBackground
									key={index}
									background={v}
									controlBackground={controlBackground}
								/>
							))}
						</div>
					) : (
						<div className="texture_background_colors">
							<p className="mb-1">Choose Texture Background</p>
							{textureBackground.map((v, index) => (
								<TextureBackground
									key={index}
									background={v}
									controlBackground={controlBackground}
								/>
							))}
						</div>
					)}
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default Background;
