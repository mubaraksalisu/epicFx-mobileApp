import React, { useContext } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";
import AppText from "../../generic/AppText/AppText";
import AuthContext from "../../../contexts/authContext";

function BasicDetails(props) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.avater}>
        <MaterialCommunityIcons
          name="account"
          size={120}
          color={colors.secondary}
        />
      </View>
      <AppText style={styles.sayHello}>{`Hello ${user.firstName}!`}</AppText>
      <AppText style={styles.userEmail}>{`${user.email}`}</AppText>
    </View>
  );
}

export default BasicDetails;
