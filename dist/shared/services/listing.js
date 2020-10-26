"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.listingServiceFactory = exports.EnvType = void 0;

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

var listingServiceFactory = function listingServiceFactory(restClient, env) {
  var serviceUrl = getServiceUrl(env);
  return {
    search: function search(params) {
      console.log("lala: ", params);
      return restClient.get(serviceUrl, {
        params: paramsTransforms[env](params)
      });
    }
  };
};

exports.listingServiceFactory = listingServiceFactory;
var _default = listingServiceFactory;
exports["default"] = _default;