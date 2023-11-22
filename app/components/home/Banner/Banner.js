import React from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-web-swiper";

import styles from "./styles";

const pics = [
  { id: 1, image: require("../../../assets/banner1.png") },
  { id: 2, image: require("../../../assets/banner2.png") },
  { id: 3, image: require("../../../assets/banner3.png") },
];

function Banner(props) {
  return (
    <View style={styles.container}>
      <Swiper loop timeout={5} controlsEnabled={false}>
        {pics.map((item, index) => (
          <Image style={styles.image} key={index} source={item.image} />
        ))}
      </Swiper>
    </View>
  );
}

export default Banner;
