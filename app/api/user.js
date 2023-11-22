import client from "./client";

const endPoint = "/users/";

const fetchUser = (id) => client.apiClient.get(endPoint + id);

const createUser = (data) => client.apiClient.post(endPoint, data);

const updateUser = (id, data) => client.apiClient.put(endPoint + id, data);

const updatePassword = (id, data) =>
  client.apiClient.put(endPoint + "updatePassword/" + id, data);

const updateAccount = (id, data) =>
  client.apiClient.put(endPoint + "updateAccount/" + id, data);

const updateInvestmentStatus = (id, data) =>
  client.apiClient.put(endPoint + "updateInvestmentStatus/" + id, data);

const updateLastPaymentDate = (id, data) =>
  client.apiClient.put(`${endPoint}upadateLastPaymentDate/${id}`, data);

const getPayoutUsers = (investmentDay) =>
  client.apiClient.get(endPoint + `payoutUsers/${investmentDay}`);

export default {
  fetchUser,
  createUser,
  updatePassword,
  updateAccount,
  updateUser,
  updateInvestmentStatus,
  getPayoutUsers,
  updateLastPaymentDate,
};
