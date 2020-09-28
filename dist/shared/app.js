"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _menu = _interopRequireDefault(require("../components/menu"));

var _home = _interopRequireDefault(require("../views/home"));

var App = function App(_ref) {
  var name = _ref.name,
      capo = _ref.capo;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-app"
  }, /*#__PURE__*/_react["default"].createElement(_menu["default"], null), /*#__PURE__*/_react["default"].createElement(_home["default"], null));
};

var _default = App;
exports["default"] = _default;