import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";
import AppText from "../../generic/AppText/AppText";

function InfoItem({ name, size, title, onPress }) {
  return (
    <View style={styles.InfoItemContainer}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name={name}
          size={size}
          style={styles.icon}
          color={colors.primary}
        />
        <AppText style={styles.icon}>{title}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default InfoItem;
