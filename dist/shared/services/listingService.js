"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.listingService = exports.EnvType = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _paramsTransforms;

var EnvType = {
  SERVER: "SERVER",
  CLIENT: "CLIENT"
};
exports.EnvType = EnvType;

var getServiceUrl = function getServiceUrl(env) {
  return env === EnvType.SERVER ? "https://api.mercadolibre.com/sites/MLA/search" : "/api/items";
};

var paramsTransforms = (_paramsTransforms = {}, (0, _defineProperty2["default"])(_paramsTransforms, EnvType.SERVER, function (_ref) {
  var search = _ref.search,
      limit = _ref.limit;
  return {
    q: search,
    limit: limit
  };
}), (0, _defineProperty2["default"])(_paramsTransforms, EnvType.CLIENT, function (params) {
  return params;
}), _paramsTransforms);

var listingService = function listingService(restClient, env) {
  var serviceUrl = getServiceUrl(env);
  return {
    search: function search(params) {
      return restClient.get(serviceUrl, {
        params: paramsTransforms[env](params)
      });
    }
  };
};

exports.listingService = listingService;
var _default = listingService;
exports["default"] = _default;