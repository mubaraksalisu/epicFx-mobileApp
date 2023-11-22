import client from "./client";

const endpoint = "/payoutRecords";

const getTotalPayout = (id) =>
  client.apiClient.get(endpoint + `/userTotal/${id}`);

const postPayoutRecord = (data) => client.apiClient.post(endpoint, data);

export default {
  getTotalPayout,
  postPayoutRecord,
};
