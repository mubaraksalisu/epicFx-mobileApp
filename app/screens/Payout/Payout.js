import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";

import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import apiCall from "../../hooks/apiCall";
import user from "../../api/user";
import colors from "../../config/colors";
import PayoutListItem from "./PayoutListItem";
import Seperator from "../../components/generic/Seperator/Seperator";
import AppText from "../../components/generic/AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Payout(props) {
  const { error, data, loading, request } = apiCall(user.getPayoutUsers);

  const getPayoutUser = async () => {
    const date = new Date();
    const today = date.getDay();
    await request(today);
  };

  useEffect(() => {
    getPayoutUser();
  }, []);

  return (
    <Screen style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={loading}
            size={50}
            color={colors.primary}
          />
        </View>
      ) : (
        <>
          {data && data.length ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <PayoutListItem user={item} />}
              ItemSeparatorComponent={Seperator}
            />
          ) : (
            <View style={styles.noPayout}>
              <MaterialCommunityIcons
                name="cash-multiple"
                color={colors.primary}
                size={150}
              />
              <AppText style={styles.noPayoutText}>
                No One To Pay Today.{" "}
              </AppText>
            </View>
          )}
        </>
      )}
    </Screen>
  );
}

export default Payout;
