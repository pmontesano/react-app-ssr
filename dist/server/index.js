"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _app = _interopRequireDefault(require("../shared/app"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var app = (0, _express["default"])();
app.use("/static", _express["default"]["static"](_path["default"].resolve(__dirname, "../public")));
var initialState = {
  name: "pablo",
  capo: true
};
app.get("/", function (req, res) {
  var component = _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_app["default"], _objectSpread({}, initialState)));

  var html = "\n    <!doctype html>\n        <html>\n            <head>\n                <script>window.__INITIAL__DATA__ = ".concat(JSON.stringify({
    initialState: initialState
  }), "</script>\n            </head>\n            <body>\n                <div id=\"root\">").concat(component, "</div>\n                ").concat(req.query.noscript === undefined ? '<script src="/static/app.js"></script>' : "", "\n            </body>\n        </html>");
  res.send(html);
});
var port = 3000;
app.listen(port, function () {
  console.log("app listening at http://localhost:".concat(port));
});