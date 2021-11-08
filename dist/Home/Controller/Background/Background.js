"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _PlainBackground = _interopRequireDefault(require("./PlainBackground"));

var _TextureBackground = _interopRequireDefault(require("./TextureBackground"));

var _VisualaizerRaj = require("../../VisualaizerRaj");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Background = () => {
  const {
    visualaizer,
    setVisualaizer
  } = (0, _react.useContext)(_VisualaizerRaj.ControlData);
  const [backgroundType, setBackgroundType] = (0, _react.useState)('plainBackground');

  const controlBackground = value => {
    setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
      background: {
        value: value,
        type: backgroundType
      }
    }));
  };

  let plainBackground = ['#0dcaf0', '#dc3545', '#6c757d', '#0d6efd', '#198754', '#ffc107'];
  let textureBackground = ['tbg1.jpg', 'tbg2.jpg', 'tbg3.jpg'];
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Item, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Header, {
    className: "according-btn"
  }, "Background"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, {
    className: "mb-2 w-100"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "info",
    onClick: () => setBackgroundType('plainBackground')
  }, "Plain Background"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: () => setBackgroundType('textureBackground')
  }, "Texture Background")), /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-body"
  }, backgroundType === 'plainBackground' ? /*#__PURE__*/_react.default.createElement("div", {
    className: "plain_background_colors"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-1"
  }, "Choose Plain Background Color"), plainBackground.map((v, index) => /*#__PURE__*/_react.default.createElement(_PlainBackground.default, {
    key: index,
    background: v,
    controlBackground: controlBackground
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "texture_background_colors"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "mb-1"
  }, "Choose Texture Background"), textureBackground.map((v, index) => /*#__PURE__*/_react.default.createElement(_TextureBackground.default, {
    key: index,
    background: v,
    controlBackground: controlBackground
  }))))));
};

var _default = Background;
exports.default = _default;