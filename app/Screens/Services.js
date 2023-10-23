import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../Const/colors";

const Services = () => {

  const data = () => {

  }

  return (
    <View style={styles.header}>
      <View style={styles.servicesContainer}>
        <View style={styles.titleContatiner}>
          <Text style={styles.title}>Our Services</Text>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.body}>
            Creating a fun and not boring learning atmosphere
          </Text>
        </View>

        <View>

        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  header: {
    width: wp("100%"),
    height: hp("100%"),
  },
  servicesContainer: {
    marginTop: hp("15%"),
    alignItems: "center",
  },
  titleContatiner: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    color: COLORS.greenBtn,
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyContainer: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: wp("44%"),
    marginTop: hp("5%"),
  },
  body: {
    color: COLORS.titleColor,
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: 300,
    height: 200,
    // marginRight: 10,
  },
});
