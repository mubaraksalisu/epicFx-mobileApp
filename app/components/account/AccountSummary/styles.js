import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  summaryBox: {
    borderRadius: 5,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    width: "49%",
    backgroundColor: colors.white,
    padding: 10,
    alignItems: "center",
  },
  amount: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
  title: {},
});
