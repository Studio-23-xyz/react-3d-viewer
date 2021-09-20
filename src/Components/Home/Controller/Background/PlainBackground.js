import React from 'react';

const PlainBackground = ({ background, controlBackground }) => {
	return (
		<div
			style={{ background: background }}
			className="bc1"
			onClick={() => controlBackground(background)}
		></div>
	);
};

export default PlainBackground;
