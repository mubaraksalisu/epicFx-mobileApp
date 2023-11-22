import Toast from "react-native-toast-message";
import React from "react";

function ToastInit(props) {
  return <Toast visibilityTime={5000} />;
}

const show = (type, text1, text2) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export default {
  ToastInit,
  show,
};
