import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  emptyNotify: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  emptyNotifyText: {
    fontSize: 25,
    fontWeight: "600",
  },
});
