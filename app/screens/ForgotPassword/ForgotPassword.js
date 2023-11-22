import React, { useState } from "react";
import * as Yup from "yup";

import styles from "./styles";
import colors from "../../config/colors";
import AppForm from "../../components/generic/AppForm/AppForm";
import Screen from "../../components/generic/Screen/Screen";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import { ActivityIndicator } from "react-native";
import user from "../../api/user";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function ForgotPassword({ navigation }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleUserCheck = async (userEmail, { resetForm }) => {
    setError(false);
    setLoading(true);

    const { data, ok } = await user.checkUser(userEmail);
    if (!ok) return setError(data), setLoading(false);

    const code = Math.floor(100000 + Math.random() * 900000);
    setLoading(false);
    navigation.navigate("CodeCheck", { code });
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleUserCheck}
      >
        <ErrorMessage error={error} visible={error ? true : false} />
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
        {loading ? (
          <ActivityIndicator
            animating={loading}
            color={colors.primary}
            size={30}
          />
        ) : (
          <SubmitButton title="Login" />
        )}
      </AppForm>
    </Screen>
  );
}

export default ForgotPassword;
