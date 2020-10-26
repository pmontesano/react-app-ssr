"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _template = _interopRequireDefault(require("./template"));

var _axios = _interopRequireDefault(require("axios"));

var _listingService = require("../shared/services/listingService");

var _app = _interopRequireDefault(require("../shared/app"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var app = (0, _express["default"])();
var props = {
  author: {
    name: "Pablo",
    lastname: "Montesano"
  },
  items: [],
  categories: []
};
app.use("/static", _express["default"]["static"](_path["default"].resolve(__dirname, "../public"))); // app.use("/", express.static(path.join(__dirname, "../build")));
// app.use("/static", express.static(path.join(__dirname, "../src/static")));

var getlistingService = (0, _listingService.listingService)(_axios["default"], _listingService.EnvType.SERVER);
app.get("/", function (req, res) {
  var initialState = _objectSpread({}, props);

  var component = _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_app["default"], _objectSpread({}, initialState)));

  var html = (0, _template["default"])(component, initialState);
  res.send(html);
});
app.get("/api/items", function (req, res) {
  getlistingService.search({
    search: req.query.search,
    limit: 5
  }).then(function (response) {
    // handle success
    res.json(response.data);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  });
});
app.get("/items", function (req, res) {
  getlistingService.search({
    search: req.query.search,
    limit: 5
  }).then(function (response) {
    console.log("pepe response.data", response.data);
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

    var initialState = _objectSpread(_objectSpread({}, props), {}, {
      categories: response.data.available_filters,
      items: results
    });

    var component = _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_app["default"], _objectSpread({}, initialState)));

    var html = (0, _template["default"])(component, initialState);
    res.send(html);
  })["catch"](function (error) {
    // handle error
    console.log(error);
  });
});
var port = 3000;
app.listen(port, function () {
  console.log("app listening at http://localhost:".concat(port));
});