"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextureBackground = _ref => {
  let {
    background,
    controlBackground
  } = _ref;

  let tbg = require("../../../../Background/".concat(background)).default;

  let backgroundStyle = "url(".concat(tbg, ")");
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: backgroundStyle
    },
    className: "bc4 ",
    onClick: () => controlBackground(background)
  });
};

var _default = TextureBackground;
exports.default = _default;