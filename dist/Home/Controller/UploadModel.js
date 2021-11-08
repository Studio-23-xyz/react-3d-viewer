"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url-search-params.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _VisualaizerRaj = require("../VisualaizerRaj");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UploadModel = () => {
  const {
    visualaizer,
    setVisualaizer,
    setLoading
  } = (0, _react.useContext)(_VisualaizerRaj.ControlData);
  const [uploadType, setUploadType] = (0, _react.useState)('file');
  const [file, setFile] = (0, _react.useState)();
  const [url, setUrl] = (0, _react.useState)();

  const fileUpload = e => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (e === undefined || e.length < 1) {
      alert('no file selected');
    } else {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(e[0].name)[1]; // "txt

      if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
        alert('please select a valid file, only supported glb/gltf, fbx and obj file');
      } else if (ext === 'gltf' || ext === 'glb' || ext === 'obj' || ext === 'fbx') {
        console.log(e.length);
        const url = URL.createObjectURL(e[0]);
        setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
          model: {
            url: url,
            extension: ext
          }
        }));
      }
    }
  };

  const urlLoad = e => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (e === '') {
      alert('no url selected');
    } else {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(e)[1]; // "txt

      if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
        alert('please select a valid url,only supported glb/gltf, fbx and obj url');
      } else if (ext === 'gltf' || ext === 'glb' || ext === 'obj' || ext === 'fbx') {
        const url = e;
        setVisualaizer(_objectSpread(_objectSpread({}, visualaizer), {}, {
          model: {
            url: url,
            extension: ext
          }
        }));
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Item, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Header, {
    className: "according-btn"
  }, "Upload A model"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ButtonGroup, {
    className: "mb-2 w-100"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "info",
    onClick: () => setUploadType('file')
  }, "File Upload"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: () => setUploadType('url')
  }, "Url Upload")), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload_model"
  }, uploadType === 'file' ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    controlId: "formFile",
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "Upload a gltf/obj/fbx file"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "file",
    onChange: e => setFile(e.target.files)
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "w-100 mt-3",
    variant: "success",
    onClick: () => fileUpload(file)
  }, "File Upload")) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {
    controlId: "formFile",
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, "gltf/fbx/obj model url"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    type: "text",
    onChange: e => setUrl(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "w-100 mt-3",
    variant: "success",
    onC0lick: () => urlLoad(url)
  }, "Url Upload")))));
};

var _default = UploadModel;
exports.default = _default;