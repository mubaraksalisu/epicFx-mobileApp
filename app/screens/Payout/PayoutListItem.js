import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../../components/generic/AppText/AppText";
import styles from "./styles";
import colors from "../../config/colors";
import AppButton from "../../components/generic/AppButton/AppButton";
import PaymentStatusBadge from "../../components/generic/PaymentStatusBadge/PaymentStatusBadge";
import apiCall from "../../hooks/apiCall";
import payoutRecord from "../../api/payoutRecord";
import userEndpoint from "../../api/user";
import { ActivityIndicator } from "react-native";

function PayoutListItem({ user }) {
  const [open, setOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const updatePayoutRecord = apiCall(payoutRecord.postPayoutRecord);
  const updateLastPaymentDate = apiCall(userEndpoint.updateLastPaymentDate);

  const handlePaid = async () => {
    const LastPayoutData = {
      lastPaymentDate: new Date(),
    };

    const payoutRec = {
      userId: user._id,
      payoutAmount: user.plan.returns,
    };

    const payoutRecResponse = await updatePayoutRecord.request(payoutRec);
    const lastpaymentResponse = await updateLastPaymentDate.request(
      user._id,
      LastPayoutData
    );

    if (!lastpaymentResponse.ok || !payoutRecResponse.ok)
      return alert("Unexpected error occured, reload app");

    setPaid(true);
  };

  useEffect(() => {
    if (user.lastPaymentDate) {
      const lastPaid = new Date(user.lastPaymentDate).toDateString();
      const currentDate = new Date().toDateString();
      if (lastPaid === currentDate) setPaid(true);
    }
  }, []);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
        <View style={styles.payoutListContainer}>
          <AppText style={styles.userName}>{user.firstName}</AppText>
          <View style={styles.badgeNArrowCon}>
            <PaymentStatusBadge paid={paid} />
            <MaterialCommunityIcons
              name={open ? "chevron-up" : "chevron-down"}
              size={30}
              color={colors.medium}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {open && (
        <View style={styles.dropdown}>
          <AppText style={styles.payoutDetailTitles}>Investor Name</AppText>
          <AppText
            style={styles.payoutDetailValues}
          >{`${user.firstName} ${user.lastName}`}</AppText>

          <AppText style={styles.payoutDetailTitles}>
            Bank Account Number
          </AppText>
          <AppText style={styles.payoutDetailValues}>
            {user.accountNumber}
          </AppText>

          <AppText style={styles.payoutDetailTitles}>Investor Email</AppText>
          <AppText style={styles.payoutDetailValues}>{user.email}</AppText>

          <AppText style={styles.payoutDetailTitles}>Bank Account Name</AppText>
          <AppText style={styles.payoutDetailValues}>
            {user.accountName}
          </AppText>

          <AppText style={styles.payoutDetailTitles}>Bank Name</AppText>
          <AppText style={styles.payoutDetailValues}>{user.bankName}</AppText>

          {updatePayoutRecord.loading || updateLastPaymentDate.loading ? (
            <ActivityIndicator
              animating={
                updatePayoutRecord.loading || updateLastPaymentDate.loading
              }
              color={colors.primary}
              size={50}
            />
          ) : (
            <AppButton
              title="Paid"
              onPress={handlePaid}
              disabled={paid ? true : false}
            />
          )}
        </View>
      )}
    </>
  );
}

export default PayoutListItem;
