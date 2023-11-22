import client from "./client";

const endpoint = "/exchangeRate/";

const getExchangeRate = () => client.apiClient.get(endpoint);

const updateExchangeRate = (id, data) =>
  client.apiClient.put(endpoint + id, data);

export default {
  getExchangeRate,
  updateExchangeRate,
};
