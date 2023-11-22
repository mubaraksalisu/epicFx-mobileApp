import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  adminLinks: {
    paddingTop: "50%",
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
});
