import React, { useContext, useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import AppForm from "../../components/generic/AppForm/AppForm";
import AppFormField from "../../components/generic/AppForm/AppFormField";
import SubmitButton from "../../components/generic/AppForm/SubmitButton";
import ErrorMessage from "../../components/generic/AppForm/ErrorMessage";
import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import colors from "../../config/colors";
import ListItem from "./../../components/generic/ListItem/ListItem";
import Icon from "../../components/generic/Icon/Icon";
import AppTextInput from "./../../components/generic/AppTextInput/AppTextInput";
import apiCall from "./../../hooks/apiCall";
import exchange from "../../api/exchange";
import ExchangeContext from "./../../contexts/exchangeContext";
import toastMessage from "../../utility/toastMessage";

const menuItems = [
  {
    title: "Update Exchange Rate",
    icon: {
      iconName: "cash",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Today's payout",
    icon: {
      iconName: "cash-plus",
      backgroundColor: "pink",
    },
    location: "Payout",
  },
];

const validationSchema = Yup.object().shape({
  exchangeRate: Yup.number().required(),
});

function Admin({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const dollarRate = useContext(ExchangeContext);
  const { error, loading, request, data } = apiCall(
    exchange.updateExchangeRate
  );
  const handleMenuPress = (screen) => {
    if (screen) return navigation.navigate(screen);

    setShowModal(true);
  };

  const handleUpdateExchangeRate = async (exchage, { resetForm }) => {
    const newRate = parseInt(exchage.exchangeRate);
    const res = await request(dollarRate["0"]._id, { exchangeRate: newRate });
    if (res.ok) {
      setShowModal(!showModal);
      toastMessage.show("success", "Exchange Rate updated");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.adminLinks}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              onPress={() => handleMenuPress(item.location)}
              ImageComponent={
                <Icon
                  name={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          ))}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContentContainer}>
              <Pressable onPress={() => setShowModal(false)}>
                <MaterialCommunityIcons
                  style={styles.closeIcon}
                  name="close"
                  size={30}
                  color={colors.medium}
                />
              </Pressable>
              <AppForm
                initialValues={{
                  exchangeRate: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleUpdateExchangeRate}
              >
                <ErrorMessage
                  error="An unexpect error happened."
                  visible={error}
                />
                <AppFormField
                  icon="cash-multiple"
                  name="exchangeRate"
                  iconColor={colors.primary}
                  placeholder="Enter exchange rate"
                  keyboardType="phone-pad"
                  autoCorrect={false}
                />
                {loading ? (
                  <ActivityIndicator
                    animating={loading}
                    color={colors.primary}
                    size={50}
                  />
                ) : (
                  <SubmitButton title="Update" />
                )}
              </AppForm>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Screen>
  );
}

export default Admin;
