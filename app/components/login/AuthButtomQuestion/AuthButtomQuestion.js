import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";

import AppText from "../../generic/AppText/AppText";
import styles from "./styles";

function AuthButtomQuestion({ pageName }) {
  const navigation = useNavigation();

  return (
    <View style={styles.buttomText}>
      {pageName === "register" && (
        <AppText>
          {pageName === "login" ? "" : "Already have an account?"}
        </AppText>
      )}
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(pageName === "login" ? "Register" : "Login")
        }
      >
        <AppText style={styles.registerText}>
          {pageName === "login" ? "Register" : "Login"}
        </AppText>
      </TouchableWithoutFeedback>

      {pageName === "login" && (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("UserCheck")}
        >
          <AppText style={styles.registerText}>Forgotten password</AppText>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

export default AuthButtomQuestion;
