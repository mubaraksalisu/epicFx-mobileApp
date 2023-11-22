import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/contexts/authContext";
import ExchangeContext from "./app/contexts/exchangeContext";
import AuthNavigator from "./app/navigation/AuthNavigator";
import * as SplashScreen from "expo-splash-screen";
import userStorage from "./app/storages/user";
import logger from "./app/utility/logger";
import { View } from "react-native";
import apiCall from "./app/hooks/apiCall";
import exchange from "./app/api/exchange";
import toastMessage from "./app/utility/toastMessage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();
  const [data, setData] = useState();

  const restoreUser = async () => {
    const userDetails = await userStorage.getUser();
    if (!userDetails) return;

    setUser(userDetails);
  };

  const fetchExchangeRate = async () => {
    const res = await exchange.getExchangeRate();
    if (!res.ok) return setData(770);

    setData(res.data);
  };

  const getAppReady = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await restoreUser();
      await fetchExchangeRate();
    } catch (error) {
      logger.log(error);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    getAppReady();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <ExchangeContext.Provider value={data}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={navigationTheme}>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </View>
        </NavigationContainer>
        <toastMessage.ToastInit />
        <StatusBar style="auto" />
      </AuthContext.Provider>
    </ExchangeContext.Provider>
  );
}
