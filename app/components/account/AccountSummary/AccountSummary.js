import React, { useContext } from "react";
import { View } from "react-native";

import AuthContext from "../../../contexts/authContext";
import styles from "./styles";
import AccountSummaryItem from "./AccountSummaryItem";

function AccountSummary(props) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user.plan && (
        <View style={styles.container}>
          <AccountSummaryItem type="dollar" />
          <AccountSummaryItem type="naira" />
        </View>
      )}
    </>
  );
}

export default AccountSummary;
