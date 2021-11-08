"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _VisualaizerRaj = require("../VisualaizerRaj");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Zoom = () => {
  const {
    visualaizer,
    setVisualaizer
  } = (0, _react.useContext)(_VisualaizerRaj.ControlData);
  const {
    zoomEnable,
    zoomInLimit,
    zoomOutLimit
  } = visualaizer;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Item, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Header, {
    className: "according-btn"
  }, "Zoom"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: "8"
  }, "Zoom Enable"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: "4",
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: () => setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
      zoomEnable: !zoomEnable
    })),
    className: "form-check-input",
    type: "checkbox",
    id: "ZoomControl",
    checked: zoomEnable
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "zoom_in_limit"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-1"
  }, "Zoom In limit"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
      zoomInLimit: parseInt(e.target.value)
    })),
    type: "range",
    className: "form-range",
    value: zoomInLimit // onChange="zoomInLimit()"
    ,
    min: "10",
    max: "50",
    step: "4",
    id: "zoom_in_limit"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "zoom_out_limit"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-1"
  }, "Zoom Out limit"), /*#__PURE__*/_react.default.createElement("input", {
    onChange: e => setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
      zoomOutLimit: parseInt(e.target.value)
    })),
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

var _default = Zoom;
exports.default = _default;