export const EnvType = {
  SERVER: "SERVER",
  CLIENT: "CLIENT",
};

const getServiceUrl = (env) =>
  env === EnvType.SERVER
    ? "https://api.mercadolibre.com/sites/MLA/search"
    : "/api/items";

const paramsTransforms = {
  [EnvType.SERVER]: ({ search, limit }) => ({
    q: search,
    limit,
  }),
  [EnvType.CLIENT]: (params) => params,
};

export const listingService = (restClient, env) => {
  const serviceUrl = getServiceUrl(env);
  return {
    search: (params) => {
      return restClient.get(serviceUrl, {
        params: paramsTransforms[env](params),
      });
    },
  };
};

export default listingService;
