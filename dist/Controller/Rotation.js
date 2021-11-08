import React from 'react';
import { useContext } from 'react'; //import { Loader } from 'drei';

import { Accordion, Col, Row } from 'react-bootstrap';
import { ControlData } from '../Visualaizer';

const Rotation = () => {
  const {
    visualaizer,
    setVisualaizer
  } = useContext(ControlData);
  const {
    enableRotation,
    rotationSpeed,
    rotationTopLimit,
    rotationBottomLimit
  } = visualaizer;
  return /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: "0"
  }, /*#__PURE__*/React.createElement(Accordion.Header, {
    className: "according-btn"
  }, "Rotation"), /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement(Row, {
    className: "mb-2"
  }, /*#__PURE__*/React.createElement(Col, {
    md: "8"
  }, "Autorotation"), /*#__PURE__*/React.createElement(Col, {
    md: "4",
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: () => setVisualaizer({ ...visualaizer,
      enableRotation: !enableRotation
    }),
    className: "form-check-input",
    type: "checkbox",
    id: "autoRotationControl",
    checked: enableRotation
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rotation_speed"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Autorotation speed"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range",
    value: rotationSpeed,
    onChange: e => setVisualaizer({ ...visualaizer,
      rotationSpeed: parseInt(e.target.value)
    }),
    min: "-50",
    max: "50",
    step: "5",
    id: "rotation_speed"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rotation_limit"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Rotation Top Limit"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range",
    value: rotationTopLimit,
    onChange: e => setVisualaizer({ ...visualaizer,
      rotationTopLimit: parseInt(e.target.value)
    }),
    min: "1",
    max: "32",
    step: "1",
    id: "rotation_top_limit"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rotation_limit"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Rotation Bottom Limit"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range",
    value: rotationBottomLimit,
    onChange: e => setVisualaizer({ ...visualaizer,
      rotationBottomLimit: parseInt(e.target.value)
    }),
    min: "1",
    max: "32",
    step: "0.5",
    id: "rotation_bottom_limit"
  }))));
};

export default Rotation;