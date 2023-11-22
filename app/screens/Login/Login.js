import React from "react";
import * as Yup from "yup";
import { ActivityIndicator, Image, ScrollView } from "react-native";

import styles from "./styles";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";
import AppForm from "../../components/generic/AppForm/AppForm";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import colors from "../../config/colors";
import AuthButtomQuestion from "../../components/login/AuthButtomQuestion/AuthButtomQuestion";
import Screen from "../../components/generic/Screen/Screen";
import useAuth from "../../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function Login(props) {
  const auth = useAuth();

  const handleLogin = async ({ email, password }, { resetForm }) => {
    await auth.login(email, password);
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <ErrorMessage
            error="Invalid username and/or password"
            visible={auth.error}
          />
          <AppFormField
            icon="email"
            name="email"
            iconColor={colors.primary}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            icon="lock"
            name="password"
            iconColor={colors.primary}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          {auth.loading ? (
            <ActivityIndicator
              animating={auth.loading}
              color={colors.primary}
              size={30}
            />
          ) : (
            <SubmitButton title="Login" />
          )}
        </AppForm>
        <AuthButtomQuestion pageName="login" />
      </ScrollView>
    </Screen>
  );
}

export default Login;
