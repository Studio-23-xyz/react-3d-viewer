"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _Rotation = _interopRequireDefault(require("./Rotation"));

var _Zoom = _interopRequireDefault(require("./Zoom"));

var _Background = _interopRequireDefault(require("./Background/Background"));

var _UploadModel = _interopRequireDefault(require("./UploadModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ControllerComponent = () => {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: "5",
    id: "conficComponent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "config-section-header"
  }, /*#__PURE__*/_react.default.createElement("h6", null, "Configuration")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_Rotation.default, null), /*#__PURE__*/_react.default.createElement(_Zoom.default, null), /*#__PURE__*/_react.default.createElement(_Background.default, null), /*#__PURE__*/_react.default.createElement(_UploadModel.default, null)));
};

var _default = ControllerComponent;
exports.default = _default;