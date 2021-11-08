import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Rotation from './Rotation';
import Zoom from './Zoom';
import Background from './Background/Background';
import UploadModel from './UploadModel';

const ControllerComponent = () => {
  return /*#__PURE__*/React.createElement(Col, {
    md: "5",
    id: "conficComponent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "config-section-header"
  }, /*#__PURE__*/React.createElement("h6", null, "Configuration")), /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(Rotation, null), /*#__PURE__*/React.createElement(Zoom, null), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(UploadModel, null)));
};

export default ControllerComponent;