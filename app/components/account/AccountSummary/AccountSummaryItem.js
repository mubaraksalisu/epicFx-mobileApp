import React, { useContext } from "react";
import { View } from "react-native";

import AuthContext from "../../../contexts/authContext";
import ExchangeContext from "../../../contexts/exchangeContext";
import AppText from "../../generic/AppText/AppText";
import styles from "./styles";

function AccountSummaryItem({ type }) {
  const { user } = useContext(AuthContext);
  const exchange = useContext(ExchangeContext);

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <View style={styles.summaryBox}>
      <AppText style={styles.title}>
        {type === "dollar" ? "Investment in Dollar" : "Investment in Naira"}
      </AppText>
      <AppText style={styles.amount}>
        {type === "dollar"
          ? "$" + currencyFormat(user.plan.amount)
          : "NGN" + currencyFormat(user.plan.amount * exchange[0].exchangeRate)}
      </AppText>
      <AppText>Weekly returns</AppText>
      <AppText>
        {type === "dollar"
          ? "$" + currencyFormat(user.plan.returns)
          : "NGN" +
            currencyFormat(user.plan.returns * exchange[0].exchangeRate)}
      </AppText>
    </View>
  );
}

export default AccountSummaryItem;
