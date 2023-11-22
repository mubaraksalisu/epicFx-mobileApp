import client from "./client";

const endPoint = "/auth";

const login = (email, password) =>
  client.apiClient.post(endPoint, { email, password });

export default {
  login,
};
