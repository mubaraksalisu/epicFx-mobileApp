import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import auth from "../api/auth";
import user from "../api/user";
import token from "../storages/token";
import userStore from "../storages/user";
import { useNavigation } from "@react-navigation/core";
import AuthContext from "../contexts/authContext";

export default useAuth = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const authContext = useContext(AuthContext);

  const login = async (email, password) => {
    setError(false);
    setLoading(true);
    const res = await auth.login(email, password);
    if (!res.ok) return setError(true), setLoading(false);

    const decodedToken = jwtDecode(res.data);
    await token.storeToken(res.data);

    const userData = await user.fetchUser(decodedToken._id);
    if (!userData.ok) return setError(true), setLoading(false);

    await userStore.storeUser(userData.data);
    authContext.setUser(userData.data);

    setLoading(false);
    setError(false);
    navigation.replace("Welcome");
  };

  const logout = async () => {
    authContext.setUser(null);
    await userStore.removeUser();
    await token.removeToken();
    navigation.replace("Login");
  };
  return { login, loading, error, logout };
};
