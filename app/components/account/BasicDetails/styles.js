import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  avater: {
    backgroundColor: colors.primary,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  sayHello: {
    fontSize: 18,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
});
