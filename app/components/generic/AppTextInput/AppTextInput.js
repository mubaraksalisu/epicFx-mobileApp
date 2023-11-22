import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";
import textStyles from "../../../config/textStyles";

function AppTextInput({
  icon,
  iconColor = colors.medium,
  padding = 15,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width, padding }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[textStyles.text, styles.text]}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;
