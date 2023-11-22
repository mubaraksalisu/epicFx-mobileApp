import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  payoutListContainer: {
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  noPayout: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.white,
  },
  noPayoutText: {
    fontSize: 30,
    color: colors.medium,
    fontWeight: "bold",
    textAlign: "center",
  },
  badgeNArrowCon: {
    display: "flex",
    flexDirection: "row",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  payoutDetailTitles: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "700",
  },
  payoutDetailValues: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dropdown: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
});
