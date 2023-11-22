import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import colors from "../../../config/colors";
import AppText from "../AppText/AppText";
import ExchangeContext from "../../../contexts/exchangeContext";

function ExchangeRate(props) {
  const data = useContext(ExchangeContext);
  return (
    <View style={styles.container}>
      <AppText style={styles.exchangeRateTitle}>Exchange Rate</AppText>
      <AppText
        style={styles.exchangeRate}
      >{`$1 = NGN${data[0].exchangeRate}`}</AppText>
    </View>
  );
}

export default ExchangeRate;
