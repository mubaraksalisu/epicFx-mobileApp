import React, { useState, useContext } from "react";
import { ActivityIndicator, Image, ScrollView } from "react-native";
import * as Yup from "yup";

import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";
import AppForm from "../../components/generic/AppForm/AppForm";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import colors from "../../config/colors";
import userEndpoint from "../../api/user";
import AuthContext from "../../contexts/authContext";
import toastMessage from "../../utility/toastMessage";
import useAuth from "../../hooks/useAuth";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required().min(8).label("Password"),
  newPassword: Yup.string().required().min(8).label("Password"),
  confirmNewPassword: Yup.string().required().min(8).label("Password"),
});
function UpdatePassword({ navigation }) {
  const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const auth = useAuth();

  const handlePasswordChange = async (userData, { resetForm }) => {
    setError("");
    if (userData.newPassword !== userData.confirmNewPassword)
      return setError("New password and confirm new password does not match");

    const data = {
      currentPassword: userData.currentPassword,
      newPassword: userData.newPassword,
    };

    setLoading(true);
    const res = await userEndpoint.updatePassword(user._id, data);
    if (!res.ok) return setError("Invalid password"), setLoading(false);

    toastMessage.show("success", "Password change successful");
    resetForm();
    setLoading(false);
    auth.logout();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <AppForm
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handlePasswordChange}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            icon="lock"
            name="currentPassword"
            iconColor={colors.primary}
            placeholder="Current Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <AppFormField
            icon="lock"
            name="newPassword"
            iconColor={colors.primary}
            placeholder="New Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <AppFormField
            icon="lock"
            name="confirmNewPassword"
            iconColor={colors.primary}
            placeholder="Confirm New Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          {loading ? (
            <ActivityIndicator
              animating={loading}
              color={colors.primary}
              size={30}
            />
          ) : (
            <SubmitButton title="Update" />
          )}
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

export default UpdatePassword;
