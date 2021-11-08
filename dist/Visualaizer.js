import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import CanvasComponent from './Canvas/CanvasComponent';
import ControllerComponent from './Controller/ControllerComponent';
import './Visualaizer.css';
import { createContext } from 'react';
export const ControlData = /*#__PURE__*/createContext();

const Visualaizer = ({
  controlVisualaizer = {},
  setControlVisualaizer
}) => {
  const [visualaizer, setVisualaizer] = useState({
    enableRotation: true,
    rotationSpeed: 100,
    rotationTopLimit: 1,
    rotationBottomLimit: 2,
    zoomEnable: true,
    zoomInLimit: 30,
    zoomOutLimit: 9,
    background: {
      value: '#0dcaf0',
      type: 'plainBackground'
    },
    loading: true,
    model: '',
    ...controlVisualaizer
  });
  const [loading, setLoading] = useState(true);
  return /*#__PURE__*/React.createElement(ControlData.Provider, {
    value: {
      visualaizer,
      setVisualaizer,
      loading,
      setLoading
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "homeComponent",
    id: "homeComponent"
  }, /*#__PURE__*/React.createElement("h1", {
    align: "center",
    className: "mb-3"
  }, "3D Viewer"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(CanvasComponent, null), /*#__PURE__*/React.createElement(ControllerComponent, null))));
};

export default Visualaizer;