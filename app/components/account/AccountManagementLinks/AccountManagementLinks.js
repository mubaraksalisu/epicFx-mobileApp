import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";
import ListItem from "./../../generic/ListItem/ListItem";
import Icon from "./../../generic/Icon/Icon";
import colors from "../../../config/colors";
import AuthContext from "../../../contexts/authContext";
import AppText from "../../generic/AppText/AppText";
import useAuth from "../../../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";

const menuItems = [
  {
    title: "Inbox",
    icon: {
      iconName: "email",
      backgroundColor: colors.primary,
    },
    location: "Notifications",
  },

  {
    title: "Update Password",
    icon: {
      iconName: "lock",
      backgroundColor: colors.secondary,
    },
    location: "Update Password",
  },

  {
    title: "Update Account Details",
    icon: {
      iconName: "bank",
      backgroundColor: colors.primary,
    },
    location: "Update Account",
  },
];

function AccountManagementLinks(props) {
  const auth = useAuth();
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleMenuPress = (screen) => {
    user.plan
      ? navigation.navigate(screen)
      : alert(
          "You have no active investment, invest first to continue with the update"
        );
  };
  return (
    <>
      <View style={styles.container}>
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
      <TouchableOpacity onPress={auth.logout}>
        <AppText style={styles.logout}>Logout</AppText>
      </TouchableOpacity>
    </>
  );
}

export default AccountManagementLinks;
