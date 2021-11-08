"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Canvas.css");

var _reactBootstrap = require("react-bootstrap");

var _ri = require("react-icons/ri");

var _bi = require("react-icons/bi");

var _html2canvas = _interopRequireDefault(require("html2canvas"));

var _VisualaizerRaj = require("../VisualaizerRaj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CanvasView = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => _interopRequireWildcard(require('./CanvasView.js'))));

const CanvasComponent = () => {
  const {
    setLoading
  } = (0, _react.useContext)(_VisualaizerRaj.ControlData);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  let fullScreen = false;

  const fullScreenControl = () => {
    if (fullScreen === false) {
      document.getElementById('homeComponent').classList.remove('homeComponent');
      document.getElementById('homeComponent').classList.add('homeComponentFullScreen');
      document.getElementById('canvasComponent').classList.remove('col-md-7');
      document.getElementById('canvasComponent').classList.add('col-md-12');
      document.getElementById('renderCanvas').classList.add('canvas-style-change');
      document.getElementById('renderCanvas').classList.remove('canvas-style');
      document.getElementById('conficComponent').classList.add('display-nome');
      fullScreen = true;
    } else {
      document.getElementById('homeComponent').classList.add('homeComponent');
      document.getElementById('homeComponent').classList.remove('homeComponentFullScreen');
      document.getElementById('canvasComponent').classList.add('col-md-7');
      document.getElementById('canvasComponent').classList.remove('col-md-12');
      document.getElementById('renderCanvas').classList.remove('renderCanvas');
      document.getElementById('conficComponent').classList.remove('display-nome');
      document.getElementById('renderCanvas').classList.add('canvas-style');
      document.getElementById('renderCanvas').classList.remove('canvas-style-change');
      fullScreen = false;
    }
  };

  const screenShotControl = () => {
    (0, _html2canvas.default)(document.getElementById('renderCanvas')).then(function (canvas) {
      var data = canvas.toDataURL('image/jpeg', 0.9);
      var src = encodeURI(data);
      const a = document.createElement('a');
      a.href = src;
      a.download = 'canvas.png';
      a.click();
    });
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    md: "7",
    className: "canvasComponent",
    id: "canvasComponent"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "canvasControl"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "light",
    onClick: () => fullScreenControl()
  }, /*#__PURE__*/_react.default.createElement(_bi.BiFullscreen, null)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "light",
    onClick: () => screenShotControl()
  }, /*#__PURE__*/_react.default.createElement(_ri.RiScreenshot2Fill, null))), /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", {
      className: " d-flex justify-content-md-center align-items-center m-0",
      id: "loading_indicator"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
      animation: "border",
      variant: "info"
    }))
  }, /*#__PURE__*/_react.default.createElement(CanvasView, null))), ")");
};

var _default = CanvasComponent;
exports.default = _default;