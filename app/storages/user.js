import * as SecureStore from "expo-secure-store";
import logger from "../utility/logger";

const userKey = "user";

const storeUser = async (user) => {
  try {
    await SecureStore.setItemAsync(userKey, JSON.stringify(user));
  } catch (error) {
    logger.log("Error storing user", error);
  }
};

const getUser = async () => {
  try {
    const result = await SecureStore.getItemAsync(userKey);
    return JSON.parse(result);
  } catch (error) {
    logger.log("Error getting user", error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(userKey);
  } catch (error) {
    logger.log("Error removing user", error);
  }
};

export default {
  storeUser,
  getUser,
  removeUser,
};
