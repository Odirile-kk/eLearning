import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const GreenBtn = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreenBtn;

const styles = StyleSheet.create({
  btnContainer: {
   
  },
  signUpBtn: {
    padding: 15,
    borderRadius: "50%",
  },
  text: {
    color: "white",
    fontSize: hp("2%"),
    textAlign: 'center'
  },
});
