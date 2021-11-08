import React from 'react';
import { useContext } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { ControlData } from '../Visualaizer';

const Zoom = () => {
  const {
    visualaizer,
    setVisualaizer
  } = useContext(ControlData);
  const {
    zoomEnable,
    zoomInLimit,
    zoomOutLimit
  } = visualaizer;
  return /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: "1"
  }, /*#__PURE__*/React.createElement(Accordion.Header, {
    className: "according-btn"
  }, "Zoom"), /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement(Row, {
    className: "mb-2"
  }, /*#__PURE__*/React.createElement(Col, {
    md: "8"
  }, "Zoom Enable"), /*#__PURE__*/React.createElement(Col, {
    md: "4",
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: () => setVisualaizer({ ...visualaizer,
      zoomEnable: !zoomEnable
    }),
    className: "form-check-input",
    type: "checkbox",
    id: "ZoomControl",
    checked: zoomEnable
  })))), /*#__PURE__*/React.createElement("div", {
    className: "zoom_in_limit"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Zoom In limit"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setVisualaizer({ ...visualaizer,
      zoomInLimit: parseInt(e.target.value)
    }),
    type: "range",
    className: "form-range",
    value: zoomInLimit // onChange="zoomInLimit()"
    ,
    min: "10",
    max: "50",
    step: "4",
    id: "zoom_in_limit"
  })), /*#__PURE__*/React.createElement("div", {
    className: "zoom_out_limit"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-1"
  }, "Zoom Out limit"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setVisualaizer({ ...visualaizer,
      zoomOutLimit: parseInt(e.target.value)
    }),
    type: "range",
    className: "form-range",
    value: zoomOutLimit // onChange="zoomOutLimit()"
    ,
    min: "4",
    max: "14",
    step: "1",
    id: "zoom_out_limit"
  }))));
};

export default Zoom;