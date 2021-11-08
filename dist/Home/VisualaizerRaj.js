"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ControlData = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _CanvasComponent = _interopRequireDefault(require("./Canvas/CanvasComponent"));

var _ControllerComponent = _interopRequireDefault(require("./Controller/ControllerComponent"));

require("./VisualaizerRaj.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ControlData = /*#__PURE__*/(0, _react.createContext)();
exports.ControlData = ControlData;

const VisualaizerRaj = _ref => {
  let {
    visualaizer,
    setVisualaizer
  } = _ref;
  // const [visualaizer, setVisualaizer] = useState({
  // 	enableRotation: true,
  // 	rotationSpeed: 10,
  // 	rotationTopLimit: 1,
  // 	rotationBottomLimit: 2,
  // 	zoomEnable: true,
  // 	zoomInLimit: 30,
  // 	zoomOutLimit: 9,
  // 	background: {
  // 		value: '#0dcaf0',
  // 		type: 'plainBackground',
  // 	},
  // 	loading: true,
  // 	model: '',
  // });
  const [loading, setLoading] = (0, _react.useState)(true);
  return /*#__PURE__*/_react.default.createElement(ControlData.Provider, {
    value: {
      visualaizer,
      setVisualaizer,
      loading,
      setLoading
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "homeComponent",
    id: "homeComponent"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    align: "center",
    className: "mb-3"
  }, "3D Viewer"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_CanvasComponent.default, null), /*#__PURE__*/_react.default.createElement(_ControllerComponent.default, null))));
};

var _default = VisualaizerRaj;
exports.default = _default;