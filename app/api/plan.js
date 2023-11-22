import client from "./client";

const endPoint = "/plans";

const fetchPlans = () => client.apiClient.get(endPoint);

export default {
  fetchPlans,
};
