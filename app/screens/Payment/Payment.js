import React, { useContext, useState } from "react";
import { Paystack } from "react-native-paystack-webview";
import { ActivityIndicator } from "react-native";

import Screen from "../../components/generic/Screen/Screen";
import colors from "../../config/colors";
import AuthContext from "../../contexts/authContext";
import ExchangeContext from "../../contexts/exchangeContext";
import userEndpoint from "../../api/user";
import userStorage from "../../storages/user";
import toastMessage from "../../utility/toastMessage";

function Payment({ navigation, route }) {
  const { user, setUser } = useContext(AuthContext);
  const exchangeRate = useContext(ExchangeContext);
  const upgradingBalance = route.params.upgrading
    ? (route.params["0"].amount - user.plan.amount) *
      exchangeRate[0].exchangeRate
    : 0;

  const investmentAmount =
    upgradingBalance > 0
      ? parseFloat(upgradingBalance)
      : parseFloat(route.params.amount * exchangeRate[0].exchangeRate);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInvestment = async () => {
    const invsetmentDate = new Date();
    const investmentDay = invsetmentDate.getDay();
    const data = {
      plan: route.params["0"]._id,
      dateSubscribed: invsetmentDate,
      investmentDay,
    };

    setLoading(true);
    const res = await userEndpoint.updateInvestmentStatus(user._id, data);
    if (!res.ok) return setError(true), setLoading(false);

    setUser(res.data);
    userStorage.storeUser(res.data);
    setLoading(false);
    toastMessage.show(
      "success",
      "Successfully invested in epicFx and will start receiving your weekly earning automatically"
    );
    navigation.navigate("Welcome", { Screen: "Account" });
  };

  return (
    <>
      {loading && <ActivityIndicator animating={loading} />}
      {error &&
        alert(
          "Something went wrong on the server, please contact us if you get debited"
        ) &&
        navigation.navigate("Welcome")}
      <Screen>
        <Paystack
          paystackKey={"pk_test_f45e0ad4cb6a80b205cfd51b1cd28ca075f22859"}
          onCancel={() => {
            navigation.pop();
          }}
          activityIndicatorColor={colors.primary}
          onSuccess={handleInvestment}
          billingEmail={user.email}
          channels={["ussd", "card", "bank_transfer"]}
          billingName={`${user.firstName} ${user.lastName}`}
          amount={investmentAmount}
          autoStart={true}
        />
      </Screen>
    </>
  );
}

export default Payment;
