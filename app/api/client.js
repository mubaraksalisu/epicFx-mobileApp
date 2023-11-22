import { create } from "apisauce";
import token from "../storages/token";

const apiClient = create({
  baseURL: "https://epicfx.herokuapp.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await token.getToken();
  if (authToken) request.headers["x-auth-token"] = authToken;
});

export default {
  apiClient,
};
