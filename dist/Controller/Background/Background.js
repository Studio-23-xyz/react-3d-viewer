import React, { useState } from 'react';
import { Accordion, ButtonGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import PlainBackground from './PlainBackground';
import TextureBackground from './TextureBackground';
import { ControlData } from '../../Visualaizer';

const Background = () => {
  const {
    visualaizer,
    setVisualaizer
  } = useContext(ControlData);
  const [backgroundType, setBackgroundType] = useState('plainBackground');

  const controlBackground = value => {
    setVisualaizer({ ...visualaizer,
      background: {
        value: value,
        type: backgroundType
      }
    });
  };

  let plainBackground = ['#0dcaf0', '#dc3545', '#6c757d', '#0d6efd', '#198754', '#ffc107'];
  let textureBackground = ['tbg1.jpg', 'tbg2.jpg', 'tbg3.jpg'];
  return /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: "3"
  }, /*#__PURE__*/React.createElement(Accordion.Header, {
    className: "according-btn"
  }, "Background"), /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "mb-2 w-100"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "info",
    onClick: () => setBackgroundType('plainBackground')
  }, "Plain Background"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setBackgroundType('textureBackground')
  }, "Texture Background")), /*#__PURE__*/React.createElement("div", {
    className: "accordion-body"
  }, backgroundType === 'plainBackground' ? /*#__PURE__*/React.createElement("div", {
    className: "plain_background_colors"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Choose Plain Background Color"), plainBackground.map((v, index) => /*#__PURE__*/React.createElement(PlainBackground, {
    key: index,
    background: v,
    controlBackground: controlBackground
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "texture_background_colors"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Choose Texture Background"), textureBackground.map((v, index) => /*#__PURE__*/React.createElement(TextureBackground, {
    key: index,
    background: v,
    controlBackground: controlBackground
  }))))));
};

export default Background;