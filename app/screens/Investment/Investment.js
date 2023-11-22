import React, { useContext, useEffect, useState } from "react";
import { PricingCard } from "@rneui/themed";
import { ActivityIndicator, ScrollView } from "react-native";

import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import apiCall from "./../../hooks/apiCall";
import plan from "../../api/plan";
import colors from "../../config/colors";
import AppText from "../../components/generic/AppText/AppText";
import AppButton from "../../components/generic/AppButton/AppButton";
import ExchangeContext from "../../contexts/exchangeContext";
import AuthContext from "../../contexts/authContext";

function Investment({ navigation }) {
  const [plans, setPlans] = useState([]);
  const { loading, error, request } = apiCall(plan.fetchPlans);
  const exchangeRate = useContext(ExchangeContext);
  const { user } = useContext(AuthContext);

  const priceFormat = (num) => {
    return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleInvestment = (plan) => {
    if (user.plan)
      return alert(
        "You seem to have an active investment, to upgrade please click the upgrade link on the home page."
      );
    navigation.navigate("Update Account", plan);
  };

  const getPlans = async () => {
    const res = await request();
    if (!res.ok) return;

    setPlans(res.data);
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {error && (
          <>
            <AppText>An unexpected error occured</AppText>
            <AppButton title="Reload" onPress={getPlans} />
          </>
        )}
        {loading ? (
          <ActivityIndicator
            animating={loading}
            color={colors.primary}
            size={50}
          />
        ) : (
          plans.map((plan, index) => (
            <PricingCard
              color={colors.primary}
              containerStyle={styles.cardWrapper}
              infoStyle={styles.infoStyle}
              key={index}
              title={plan.title}
              price={`$${priceFormat(plan.amount)} = NGN${priceFormat(
                plan.amount * exchangeRate[0].exchangeRate
              )}`}
              info={[
                `Weekly Returns = $${priceFormat(
                  plan.returns
                )} = NGN${priceFormat(
                  plan.returns * exchangeRate[0].exchangeRate
                )}`,
                "Don't forget to read our Terms",
              ]}
              pricingStyle={styles.investmentPrice}
              button={{
                title: "GET STARTED",
                icon: "flight-takeoff",
              }}
              onButtonPress={() => handleInvestment(plan)}
            />
          ))
        )}
      </ScrollView>
    </Screen>
  );
}

export default Investment;
