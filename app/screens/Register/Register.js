import React, { useState } from "react";
import { ScrollView, Image } from "react-native";
import AppForm from "../../components/generic/AppForm/AppForm";
import Screen from "../../components/generic/Screen/Screen";
import * as Yup from "yup";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import colors from "../../config/colors";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";
import styles from "./styles";
import AuthButtomQuestion from "../../components/login/AuthButtomQuestion/AuthButtomQuestion";
import { ActivityIndicator } from "react-native";
import useAuth from "../../hooks/useAuth";
import user from "../../api/user";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3).max(50).label("First Name"),
  lastName: Yup.string().required().min(3).max(50).label("Last Name"),
  phone: Yup.string().required().min(11).max(15).label("Phone Number"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function Register(props) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const auth = useAuth();

  const handleRegister = async (data, { resetForm }) => {
    setError(false);
    setLoading(true);
    const res = await user.createUser(data);
    if (!res.ok) return setError(res.data), setLoading(false);
    console.log(res);

    setLoading(false);
    auth.login(data.email, data.password);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            // accountNumber: "",
            // accountName: "",
            // bankName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <ErrorMessage
            error={auth.error ? "An unexpect error happened." : error}
            visible={auth.error || error}
          />
          <AppFormField
            icon="account"
            name="firstName"
            iconColor={colors.primary}
            placeholder="First Name"
            autoCorrect={false}
          />
          <AppFormField
            icon="head"
            name="lastName"
            iconColor={colors.primary}
            placeholder="Last Name"
            autoCorrect={false}
          />
          <AppFormField
            icon="cellphone"
            name="phone"
            iconColor={colors.primary}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            autoCorrect={false}
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
          {/* <AppFormField
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
          /> */}
          {auth.loading || loading ? (
            <ActivityIndicator
              animating={auth.loading || loading}
              color={colors.primary}
              size={30}
            />
          ) : (
            <SubmitButton title="Register" />
          )}
        </AppForm>
        <AuthButtomQuestion pageName="register" />
      </ScrollView>
    </Screen>
  );
}

export default Register;
