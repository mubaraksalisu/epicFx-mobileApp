import React, { useContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Skeleton } from "@rneui/themed";

import AuthContext from "../../../contexts/authContext";
import AppText from "../../generic/AppText/AppText";
import Seperator from "../../generic/Seperator/Seperator";
import ManageInvestmentItem from "./ManageInvestmentItem";
import styles from "./styles";
import SummaryItem from "./SummaryItem";
import apiCall from "../../../hooks/apiCall";
import payoutRecord from "../../../api/payoutRecord";
import colors from "../../../config/colors";

function InvestmentSummary(props) {
  const { user } = useContext(AuthContext);
  const [totalEarning, setTotalEarning] = useState();
  const { error, loading, request } = apiCall(payoutRecord.getTotalPayout);

  const getUserTotalEarning = async () => {
    const res = await request(user._id);
    if (!res.data.length) return setTotalEarning(0);

    let total = 0;
    res.data.map((rec) => (total += rec.payoutAmount));
    setTotalEarning(total);
  };

  useEffect(() => {
    getUserTotalEarning();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Skeleton width={"100%"} height={250} animation="wave" />
        </>
      ) : (
        <View style={styles.container}>
          <AppText style={styles.summaryHeading}>Investment Summary</AppText>
          <Seperator />
          <SummaryItem
            title="Investment"
            value={user.plan ? user.plan.amount : ""}
          />
          <Seperator />
          <SummaryItem
            title="Weekly Earning"
            value={user.plan ? user.plan.returns : ""}
          />
          <Seperator />
          <SummaryItem title="Total Earning" value={totalEarning} />
          <ManageInvestmentItem />
        </View>
      )}
    </>
  );
}

export default InvestmentSummary;
