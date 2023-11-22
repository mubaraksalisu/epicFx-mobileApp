import React from "react";
import { ScrollView } from "react-native";

import AccountManagementLinks from "../../components/account/AccountManagementLinks/AccountManagementLinks";
import AccountSummary from "../../components/account/AccountSummary/AccountSummary";
import BasicDetails from "../../components/account/BasicDetails/BasicDetails";
import Screen from "../../components/generic/Screen/Screen";

import styles from "./styles";

function Account(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BasicDetails />
        <AccountSummary />
        <AccountManagementLinks />
      </ScrollView>
    </Screen>
  );
}

export default Account;
