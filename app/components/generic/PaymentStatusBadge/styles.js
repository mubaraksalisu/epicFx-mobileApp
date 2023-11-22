import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  badgeText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
});
