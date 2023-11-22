import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  investmentPrice: {
    fontSize: 20,
  },
  cardWrapper: {
    borderRadius: 10,
  },
  infoStyle: {
    color: colors.primary,
    padding: 5,
  },
});
