import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../../config/colors";

function Seperator({ color = colors.light, width = "100%", height = 1 }) {
  return <View style={{ backgroundColor: color, width, height }} />;
}

export default Seperator;
