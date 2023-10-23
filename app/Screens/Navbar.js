import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../Const/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GreenBtn from "../Const/GreenBtn";
import { BsImage } from "react-icons/bs";

const Navbar = () => {
  return (
    <View style={styles.header}>
    <View style={styles.navbarContainer}>
      <View style={styles.navBarImage}></View>
      <View style={styles.navbar}>
        <View style={styles.navbarLinks}>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>Course</Text>
          <Text style={styles.text}>Pricing</Text>
          <Text style={styles.text}>Success</Text>
          <Text style={styles.text}>About</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <GreenBtn />
      </View>
    </View>
  </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  header: {
    width: wp("100%"),
    height: hp("12%"),
    // backgroundColor: COLORS.textColor,
  },
  navbar: {
   justifyContent: "center",
    alignSelf: "center",
    // marginTop: hp("3%"),  
    // backgroundColor: "pink",
  },
  navBarImage: {
    height: hp("7%"),
    width: wp("15%"),
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: wp('14%')  ,
    // marginTop: hp('4%')
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginVertical: hp('2%')
  },
  navbarLinks: {
    width: wp("35%"),
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    
  },
  text: {
    color: COLORS.textColor,
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: COLORS.greenBtn,
    borderRadius: 30,
    width: wp("8%"),
    marginHorizontal: "14.5%",
    textAlign: 'center'
    // marginTop: hp("-4%"),
  },
  navImageContainer: {
    backgroundColor: "gray",
  },
});
