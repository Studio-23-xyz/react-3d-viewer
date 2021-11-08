import React from 'react';

const TextureBackground = ({ background, controlBackground }) => {
	let tbg = require(`../../../Background/${background}`).default;
	let backgroundStyle = `url(${tbg})`;
	return (
		<div
			style={{
				background: backgroundStyle,
			}}
			className="bc4 "
			onClick={() => controlBackground(background)}
		></div>
	);
};

export default TextureBackground;
