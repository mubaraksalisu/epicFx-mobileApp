import React, { useContext, useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import SelectList from "react-native-dropdown-select-list";

import styles from "./styles";
import AppText from "./../../generic/AppText/AppText";
import AuthContext from "./../../../contexts/authContext";
import colors from "../../../config/colors";
import plan from "../../../api/plan";
import apiCall from "./../../../hooks/apiCall";

function ManageInvestmentItem(props) {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [investmentPlans, setInvestmentPlans] = useState(false);
  const { error, loading, request, data: plans } = apiCall(plan.fetchPlans);

  const handleModalShow = async () => {
    const res = await request();
    if (!res.ok)
      return alert("Something went wrong on server, please reload the app.");

    let data = [];
    const eligibleUpgrade = res.data.filter((p) => p.amount > user.plan.amount);
    eligibleUpgrade.map(
      (plan) => (data = [...data, { key: plan.title, value: plan.amount }])
    );

    setInvestmentPlans(data);
  };

  const handleInvestmentUpgrade = async () => {
    const selectedPlan = plans.filter((p) => p.title === selected);
    setShowModal(false);
    navigation.navigate("Payment", { ...selectedPlan, upgrading: true });
  };

  const cancelInvestment = () => {
    alert(
      "Contact us to cancel your investment with the contact button on the home page. dont forget to include full name, and make sure to contact us with the email associated with your account"
    );
  };
  return (
    <>
      <View style={styles.manageInvestment}>
        {user.plan && (
          <TouchableOpacity onPress={cancelInvestment}>
            <AppText style={styles.manageInvestmentLink}>
              Cancel Investment
            </AppText>
          </TouchableOpacity>
        )}
        {user.plan ? (
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <AppText style={styles.manageInvestmentLink}>
              Upgrade Investment
            </AppText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Invest Now")}>
            <AppText style={styles.investCallToAction}>Invest Now</AppText>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onShow={handleModalShow}
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
            <AppText style={styles.currentInvestment}>
              {user.plan && `Current Investment = $${user.plan.amount}`}
            </AppText>

            {!loading && (
              <SelectList
                setSelected={setSelected}
                placeholder="Select upgrade amount in $"
                data={investmentPlans}
                onSelect={handleInvestmentUpgrade}
                search={false}
                boxStyles={styles.boxStyle}
                dropdownStyles={styles.dropdownStyles}
                inputStyles={styles.inputStyles}
                dropdownTextStyles={styles.inputStyles}
              />
            )}

            {loading && (
              <ActivityIndicator
                animating={loading}
                style={{ marginTop: 20 }}
                color={colors.primary}
                size={40}
              />
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ManageInvestmentItem;
