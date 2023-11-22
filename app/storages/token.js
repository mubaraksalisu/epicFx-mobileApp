import * as SecureStore from "expo-secure-store";
import logger from "../utility/logger";

const authKey = "token";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(authKey, token);
  } catch (error) {
    logger.log("Error storing key token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(authKey);
  } catch (error) {
    logger.log("Error getting key token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authKey);
  } catch (error) {
    logger.log("Error removing key token", error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
