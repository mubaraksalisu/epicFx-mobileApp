import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: colors.white,
    padding: 20,
    width: "99%",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 7,
  },
  summaryHeading: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: 5,
    marginBottom: 10,
  },
  summaryBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  manageInvestment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  manageInvestmentLink: {
    color: colors.primary,
  },
  summaryValues: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primary,
  },
  summaryTitles: {
    fontSize: 15,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(110, 105, 105, 0.6)",
  },
  modalContentContainer: {
    height: "50%",
    width: "95%",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: 20,
  },
  investCallToAction: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.primary,
  },
  boxStyle: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  dropdownStyles: {
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 2,
  },
  inputStyles: {
    fontSize: 15,
    fontWeight: "400",
  },
  currentInvestment: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.primary,
    marginBottom: 15,
  },
});
