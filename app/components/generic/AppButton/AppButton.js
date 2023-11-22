import React from "react";
import { TouchableOpacity } from "react-native";

import colors from "../../../config/colors";
import AppText from "../AppText/AppText";
import styles from "./styles";

function AppButton({
  style,
  width = "100%",
  title,
  onPress,
  color = "buttonPrimary",
  ...otherArgs
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[color], style, { width }]}
      {...otherArgs}
    >
      <AppText
        style={[
          styles.text,
          { color: color === "buttonPrimary" ? colors.white : colors.primary },
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

export default AppButton;
