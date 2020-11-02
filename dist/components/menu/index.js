"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _searchIcon = _interopRequireDefault(require("../../images/icons/search-icon"));

var namespace = "ml-menu";

var Menu = function Menu(_ref) {
  var onchangeInput = _ref.onchangeInput,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: namespace
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "../images/logo.png",
    alt: "Mercadolibre"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(namespace, "-search")
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "".concat(namespace, "-search__input"),
    placeholder: "Buscar productos, marcas y m\xE1s\u2026",
    onChange: function onChange(e) {
      return onchangeInput(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    type: "submit",
    className: "".concat(namespace, "-search__button")
  }, /*#__PURE__*/_react["default"].createElement(_searchIcon["default"], null))));
};

var _default = Menu;
exports["default"] = _default;