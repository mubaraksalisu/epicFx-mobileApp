import React from "react";
import { View } from "react-native";
import colors from "../../../config/colors";
import AppText from "../AppText/AppText";

import styles from "./styles";

function PaymentStatusBadge({ paid }) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: paid ? colors.primary : "red",
      }}
    >
      <AppText style={styles.badgeText}>{paid ? "Paid" : "Not Paid"}</AppText>
    </View>
  );
}

export default PaymentStatusBadge;
