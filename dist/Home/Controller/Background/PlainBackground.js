"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlainBackground = _ref => {
  let {
    background,
    controlBackground
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: background
    },
    className: "bc1",
    onClick: () => controlBackground(background)
  });
};

var _default = PlainBackground;
exports.default = _default;