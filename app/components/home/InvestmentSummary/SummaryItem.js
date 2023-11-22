import React from "react";
import { View } from "react-native";

import styles from "./styles";
import AppText from "./../../generic/AppText/AppText";

function SummaryItem({ title, value }) {
  return (
    <View style={styles.summaryBlock}>
      <AppText style={styles.summaryTitles}>{title}</AppText>
      <AppText style={styles.summaryValues}>
        {value ? `$${value}` : "Non"}
      </AppText>
    </View>
  );
}

export default SummaryItem;
