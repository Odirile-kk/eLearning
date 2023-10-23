import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../Const/colors";

const Stats = () => {
  return (
    <View style={styles.header}>

      <View style={styles.numbersContainer}>

        <View style={styles.numCont}>

          <View style={styles.statsContainer}>
            <Text style={styles.numText}>50k+</Text>
            <Text style={styles.text}>Students joined</Text>
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.numText}>630+</Text>
            <Text style={styles.text}>Best Online Course</Text>
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.numText}>220+</Text>
            <Text style={styles.text}>Brands Companions</Text>
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.numText}>75+</Text>
            <Text style={styles.text}>Experienced Teachers</Text>
          </View>

        </View>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  header: {
    width: wp("100%"),
    height: hp("35%"),
    backgroundColor: COLORS.grayBackground,
  },
  numbersContainer: {
    flexDirection: "row",
    // backgroundColor: 'pink',
    alignSelf: 'center'
  },
  numCont: {
    flexDirection: "row",
    width: wp("100%"),
    height: hp('35%'),
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
   
  },
  numText: {
    fontSize: 40,
    color: COLORS.greenBtn,
    fontWeight: "bold",
    // marginLeft: wp('2%'),
    textAlign: 'center',
    alignSelf: 'center'

  },
  statsContainer: {
    marginHorizontal: wp('6%'),
  },
  text: {
    color: COLORS.titleColor,
    fontSize: 20,
    textAlign: 'center',
    // marginTop: hp("2%"),
  },
});
