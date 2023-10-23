import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../Const/colors";

const Reviews = () => {
  return (
    <View style={styles.header}>
      <View style={styles.reviewContainer}>
        <View style={styles.textContainer}>
          <View style={{width: wp('35%')}}>
             <Text
            style={{
              fontWeight: "bold",
              fontSize: 48,
              color: COLORS.titleColor,
            }}
          >
            What's Our        Student Studly Said
          </Text>
          </View>
         

          <Text style={{ fontSize: 100, color: COLORS.greenBtn }}>"</Text>
          <Text style={{ color: COLORS.textColor, fontSize: 22 }}>
            The learning system is very exciting , the videos are easy to
            understand and thanks to my study here now I have worked in a well
            known company
          </Text>
          <Text
            style={{
              color: COLORS.titleColor,
              marginVertical: "10%",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            Jessica Erlin
          </Text>
        </View>
      </View>

      <View style={styles.imagesContainer}>

        <View style={styles.ringsContatiner}>
    
              <View style={styles.ring3}>
                <View style={styles.ring4}>
                  <View style={styles.ring5}>
                  <View style={styles.rectangle}></View>
                  </View>
                </View>
              </View>
            
        </View>

      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  header: {
    // width: wp("100%"),
    // height: hp("120%"),
    flexDirection: "row",
  },
  reviewContainer: {
    width: wp("45%"),
    height: hp("100%"),
    // backgroundColor: 'lightgray',
    // justifyContent: 'center',
    alignItems: "center",
    padding: "8%",
  },
  textContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    padding: "9%",
    marginLeft: hp('8%'),
    width: wp('35%')
  },
  imagesContainer: {
    width: wp("50%"),
    height: hp("100%"),
    // backgroundColor: 'pink'
  },
  ringsContatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.textColor,
  },
  ring3: {
    width: wp('30%'),
    height: wp('30%'), 
    borderRadius: wp('30%') / 2, 
    borderWidth: 1,
    borderColor: COLORS.greenBtn, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring4: {
    width: wp('38%'),
    height: wp('38%'), 
    borderRadius: wp('38%') / 2, 
    borderWidth: 1,
    borderColor: COLORS.greenBtn, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring5: {
    width: wp('46%'),
    height: wp('46%'), 
    borderRadius: wp('46%') / 2, 
    borderWidth: 1,
    borderColor: COLORS.greenBtn, 
  },
  
  rectangle: {
    width: wp('25%'),
    height: hp('75%'),
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: (wp('30%') / 2), 
    borderBottomLeftRadius: (wp('30%') / 2),
    marginTop: hp('-2%')
  },
});
