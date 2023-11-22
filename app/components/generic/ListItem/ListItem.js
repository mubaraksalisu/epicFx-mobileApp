import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";
import AppText from "../AppText/AppText";
import Seperator from "../Seperator/Seperator";

function ListItem({ image, title, ImageComponent, subtitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.primary}
            name="chevron-right"
            size={20}
          />
        </View>
        <Seperator />
      </>
    </TouchableHighlight>
  );
}

export default ListItem;
