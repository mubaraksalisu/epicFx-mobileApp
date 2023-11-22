import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 25,
    padding: 15,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonOutline: {
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 14,
  },
});
