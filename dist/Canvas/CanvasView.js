import React, { useContext } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import './Canvas.css';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'drei';
import { Physics } from 'use-cannon';
import { ControlData } from '../Visualaizer';

const CanvasView = () => {
  const {
    visualaizer
  } = useContext(ControlData);
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

  let finalModel = require('../../Models/fire.fbx').default;

  let Model = () => {
    const fbx = useLoader(FBXLoader, finalModel);
    return /*#__PURE__*/React.createElement("primitive", {
      object: fbx,
      position: [0, -1, 0]
    });
  };

  if (model !== '') {
    console.log(model);
    finalModel = model.url;

    if (model.extension === 'fbx') {
      Model = () => {
        const fbx = useLoader(FBXLoader, finalModel);
        return /*#__PURE__*/React.createElement("primitive", {
          object: fbx,
          position: [0, -1, 0]
        });
      };

      console.log('fbxModel');
    } else if (model.extension === 'obj') {
      console.log('objModel');

      Model = () => {
        const obj = useLoader(OBJLoader, finalModel);
        return /*#__PURE__*/React.createElement("primitive", {
          object: obj,
          position: [0, -1, 0]
        });
      };
    } else if (model.extension === 'gltf' || model.extension === 'glb') {
      console.log('gltfmodel');

      Model = () => {
        const gltf = useLoader(GLTFLoader, finalModel);
        return /*#__PURE__*/React.createElement("primitive", {
          object: gltf.scene,
          position: [0, -1, 0]
        });
      };
    }
  } else {
    finalModel = require('../../Models/fire.fbx').default;
  }

  let backgroundStyle;

  if (background.type === 'plainBackground') {
    backgroundStyle = background.value;
  } else {
    let tbg = require(`../../Background/${background.value}`).default;

    backgroundStyle = `url(${tbg})`;
  }

  return /*#__PURE__*/React.createElement(Canvas, {
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
  }, /*#__PURE__*/React.createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/React.createElement("spotLight", {
    intensity: 0.5,
    position: [25, 25, 25],
    angle: 0.1
  }), /*#__PURE__*/React.createElement(Physics, null, /*#__PURE__*/React.createElement(OrbitControls, {
    maxPolarAngle: Math.PI / rotationTopLimit,
    minPolarAngle: Math.PI / rotationBottomLimit,
    enableZoom: zoomEnable,
    maxZoom: zoomInLimit / 10,
    minZoom: zoomOutLimit / 10,
    autoRotate: enableRotation,
    autoRotateSpeed: rotationSpeed
  }), /*#__PURE__*/React.createElement("mesh", null, /*#__PURE__*/React.createElement(Model, null))));
};

export default CanvasView;