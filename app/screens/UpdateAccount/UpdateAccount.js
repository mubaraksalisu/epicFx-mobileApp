import React, { useContext, useState } from "react";
import { ScrollView, Image, ActivityIndicator } from "react-native";

import Screen from "../../components/generic/Screen/Screen";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";
import AppForm from "../../components/generic/AppForm/AppForm";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import colors from "../../config/colors";
import styles from "./styles";
import * as Yup from "yup";
import userEndPoint from "../../api/user";
import userStore from "../../storages/user";
import AuthContext from "../../contexts/authContext";
import toastMessage from "../../utility/toastMessage";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  accountNumber: Yup.string()
    .required()
    .min(10)
    .max(10)
    .label("Account Number"),
  accountName: Yup.string().required().min(3).max(255).label("Account Name"),
  bankName: Yup.string().required().min(3).max(255).label("Bank Name"),
});

function UpdateAccount({ navigation, route }) {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAccountChange = async (userData, { resetForm }) => {
    setError("");
    const data = {
      password: userData.password,
      accountNumber: userData.accountNumber,
      accountName: userData.accountName,
      bankName: userData.bankName,
    };

    setLoading(true);
    const res = await userEndPoint.updateAccount(user._id, data);
    if (!res.ok)
      return setError("Invalid password provided"), setLoading(false);

    const userDocument = await userEndPoint.fetchUser(user._id);
    if (!userDocument.ok)
      return setError(
        "Something went wrong on the server, please reload the app"
      );

    await userStore.storeUser(userDocument.data);
    setUser(userDocument.data);
    setLoading(false);
    resetForm();
    toastMessage.show("success", "Account details added successful");
    if (route.params.amount)
      return navigation.navigate("Payment", route.params);
    navigation.replace("Welcome", { Screen: "Account" });
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <AppForm
          initialValues={{
            password: "",
            accountNumber: "",
            accountName: "",
            bankName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleAccountChange}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            icon="lock"
            name="password"
            iconColor={colors.primary}
            placeholder="Enter Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <AppFormField
            icon="card"
            name="accountNumber"
            iconColor={colors.primary}
            placeholder="Account Number"
            keyboardType="phone-pad"
            autoCorrect={false}
          />
          <AppFormField
            icon="account"
            name="accountName"
            iconColor={colors.primary}
            placeholder="Account Name"
            autoCorrect={false}
          />
          <AppFormField
            icon="bank"
            name="bankName"
            iconColor={colors.primary}
            placeholder="Bank Name"
            autoCorrect={false}
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

export default UpdateAccount;
