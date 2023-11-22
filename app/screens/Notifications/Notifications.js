import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import AppText from "../../components/generic/AppText/AppText";
import colors from "../../config/colors";

function Notifications(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.emptyNotify}>
        <MaterialCommunityIcons
          name="email"
          color={colors.primary}
          size={150}
        />
        <AppText style={styles.emptyNotifyText}>You have no messages</AppText>
      </View>
    </Screen>
  );
}

export default Notifications;
