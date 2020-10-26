"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var namespace = "ml-search__list";

var Search = function Search(_ref) {
  var items = _ref.items,
      breadcrumb = _ref.breadcrumb;
  console.log("search initialState", items);
  console.log("search categories", breadcrumb);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "ml-bredcrumbs"
  }, breadcrumb.length > 0 && breadcrumb.map(function (cat) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: cat.name
    }, cat.name);
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: namespace
  }, items.length > 0 && items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.title
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/item/".concat(item.id)
    }, item.title));
  })));
};

var _default = Search;
exports["default"] = _default;