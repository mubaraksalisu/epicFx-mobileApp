import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

export default styles = StyleSheet.create({
  container: {
    height: 170,
    backgroundColor: colors.white,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    maxWidth: 350,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
