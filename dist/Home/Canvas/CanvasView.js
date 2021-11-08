"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactThreeFiber = require("react-three-fiber");

require("./Canvas.css");

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader");

var _FBXLoader = require("three/examples/jsm/loaders/FBXLoader");

var _OBJLoader = require("three/examples/jsm/loaders/OBJLoader");

var _drei = require("drei");

var _useCannon = require("use-cannon");

var _VisualaizerRaj = require("../VisualaizerRaj");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CanvasView = () => {
  const {
    visualaizer
  } = (0, _react.useContext)(_VisualaizerRaj.ControlData);
  const {
    model
  } = visualaizer;
  const {
    enableRotation,
    rotationSpeed,
    rotationTopLimit,
    rotationBottomLimit,
    zoomEnable,
    zoomInLimit,
    zoomOutLimit,
    background
  } = visualaizer;

  let finalModel = require('../../../Models/fire.fbx').default;

  let Model = () => {
    const fbx = (0, _reactThreeFiber.useLoader)(_FBXLoader.FBXLoader, finalModel);
    return /*#__PURE__*/_react.default.createElement("primitive", {
      object: fbx,
      position: [0, -1, 0]
    });
  };

  if (model !== '') {
    console.log(model);
    finalModel = model.url;

    if (model.extension === 'fbx') {
      Model = () => {
        const fbx = (0, _reactThreeFiber.useLoader)(_FBXLoader.FBXLoader, finalModel);
        return /*#__PURE__*/_react.default.createElement("primitive", {
          object: fbx,
          position: [0, -1, 0]
        });
      };

      console.log('fbxModel');
    } else if (model.extension === 'obj') {
      console.log('objModel');

      Model = () => {
        const obj = (0, _reactThreeFiber.useLoader)(_OBJLoader.OBJLoader, finalModel);
        return /*#__PURE__*/_react.default.createElement("primitive", {
          object: obj,
          position: [0, -1, 0]
        });
      };
    } else if (model.extension === 'gltf' || model.extension === 'glb') {
      console.log('gltfmodel');

      Model = () => {
        const gltf = (0, _reactThreeFiber.useLoader)(_GLTFLoader.GLTFLoader, finalModel);
        return /*#__PURE__*/_react.default.createElement("primitive", {
          object: gltf.scene,
          position: [0, -1, 0]
        });
      };
    }
  } else {
    finalModel = require('../../../Models/fire.fbx').default;
  }

  let backgroundStyle;

  if (background.type === 'plainBackground') {
    backgroundStyle = background.value;
  } else {
    let tbg = require("../../../Background/".concat(background.value)).default;

    backgroundStyle = "url(".concat(tbg, ")");
  }

  return /*#__PURE__*/_react.default.createElement(_reactThreeFiber.Canvas, {
    gl: {
      preserveDrawingBuffer: true
    },
    style: {
      background: backgroundStyle
    },
    id: "renderCanvas",
    width: "650",
    height: "3000",
    className: "canvas-style",
    orthographic: true,
    camera: {
      position: [0, 0, 50],
      zoom: 1,
      far: 100
    }
  }, /*#__PURE__*/_react.default.createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/_react.default.createElement("spotLight", {
    intensity: 0.5,
    position: [25, 25, 25],
    angle: 0.1
  }), /*#__PURE__*/_react.default.createElement(_useCannon.Physics, null, /*#__PURE__*/_react.default.createElement(_drei.OrbitControls, {
    maxPolarAngle: Math.PI / rotationTopLimit,
    minPolarAngle: Math.PI / rotationBottomLimit,
    enableZoom: zoomEnable,
    maxZoom: zoomInLimit / 10,
    minZoom: zoomOutLimit / 10,
    autoRotate: enableRotation,
    autoRotateSpeed: rotationSpeed
  }), /*#__PURE__*/_react.default.createElement("mesh", null, /*#__PURE__*/_react.default.createElement(Model, null))));
};

var _default = CanvasView;
exports.default = _default;