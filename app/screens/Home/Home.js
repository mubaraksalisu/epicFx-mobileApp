import React from "react";
import { ScrollView } from "react-native";

import styles from "./styles";
import Screen from "../../components/generic/Screen/Screen";
import Banner from "../../components/home/Banner/Banner";
import InvestmentSummary from "../../components/home/InvestmentSummary/InvestmentSummary";
import Info from "../../components/home/Info/Info";

function Home(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <InvestmentSummary plan={200} weeklyEarning={10} totalEarning={210} />
        <Info />
      </ScrollView>
    </Screen>
  );
}

export default Home;
