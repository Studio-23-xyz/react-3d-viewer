import React from 'react';

const PlainBackground = ({
  background,
  controlBackground
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: background
    },
    className: "bc1",
    onClick: () => controlBackground(background)
  });
};

export default PlainBackground;