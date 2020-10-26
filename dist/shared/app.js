"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _menu = _interopRequireDefault(require("../components/menu"));

var _search = _interopRequireDefault(require("../components/search"));

require("../styles/app.scss");

var _axios = _interopRequireDefault(require("axios"));

var _listingService = require("../shared/services/listingService");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getlistingService = (0, _listingService.listingService)(_axios["default"], _listingService.EnvType.CLIENT);

var App = function App(initialState) {
  var _useState = (0, _react.useState)(""),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(initialState),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var onClick = function onClick() {
    getlistingService.search({
      search: value,
      limit: 5
    }).then(function (response) {
      var results = response.data.results.map(function (item) {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price
          }
        };
      });
      setState(_objectSpread(_objectSpread({}, state), {}, {
        categories: response.data.available_filters,
        items: results
      }));
      history.pushState(_objectSpread(_objectSpread({}, state), {}, {
        categories: response.data.available_filters,
        items: results
      }), "search page", "/items?search=".concat(value));
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-app"
  }, /*#__PURE__*/_react["default"].createElement(_menu["default"], {
    value: value,
    onchangeInput: function onchangeInput(value) {
      return setValue(value);
    },
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement(_search["default"], {
    items: state.items,
    breadcrumb: state.categories
  }));
};

var _default = App;
exports["default"] = _default;