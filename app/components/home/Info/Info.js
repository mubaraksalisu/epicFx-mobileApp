import React from "react";
import { View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
import InfoItem from "./InfoItem";

function Info(props) {
  const navigation = useNavigation();

  const contact = () => {
    let url = `mailto:epicfxinvestment@gmail.com`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <InfoItem name="email" size={50} title="Contact Us" onPress={contact} />
      <InfoItem
        name="account-group"
        size={50}
        title="About Us"
        onPress={() => navigation.navigate("About")}
      />
      <InfoItem
        name="book"
        size={50}
        title="Terms"
        onPress={() => navigation.navigate("Terms")}
      />
    </View>
  );
}

export default Info;
