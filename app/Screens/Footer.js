import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../Const/colors";
import { ScrollView } from "react-native-gesture-handler";

const Footer = () => {
  return (
    <ScrollView>
  <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={styles.imageContainer}></View>
        <View >
          <Text style={styles.rightText}>
            Lorem ipsum dolor sit amet, consectetur ipiscing elit. Pretium.
          </Text>
        </View>
        <View style={styles.imageContainer}></View>
      </View>

      <View style={styles.leftContainer}>
        <View style={styles.courseText}>
          <Text style={styles.title}>Course</Text>
          <Text style={styles.text}>UI/UX Design</Text>
          <Text style={styles.text}>Graphic Design</Text>
          <Text style={styles.text}>Web Development</Text>
          <Text style={styles.text}>Mobile Development</Text>
          <Text style={styles.text}>Business Marketing</Text>
        </View>

        <View style={styles.resourcesText}>
          <Text style={styles.title}>Resources</Text>
          <Text style={styles.text}>Help Center</Text>
          <Text style={styles.text}>Partners</Text>
          <Text style={styles.text}>Newsletter</Text>
          <Text style={styles.text}>Blog</Text>
          <Text style={styles.text}>Testimonials</Text>
        </View>

        <View style={styles.companyText}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.text}>About Us</Text>
          <Text style={styles.text}>Careers</Text>
          <Text style={styles.text}>Contact</Text>
          <Text style={styles.text}>Privacy</Text>
          <Text style={styles.text}>FAQ</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    // height: hp("55%"),
    backgroundColor: "#f5fcfa",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: 'wrap'
  },
  rightContainer: {
    width: wp("20%"),
  },
  leftContainer: {
    width: wp("55%"),
    height: hp("45%"),
    // backgroundColor: 'white',
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "2%",
    // alignItems: 'center'
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.titleColor,
    marginBottom: hp("4%"),
  },
  text: {
    fontSize: 18,
    marginVertical: hp("1.5%"),
    color: COLORS.textColor,
  },
  imageContainer: {
    width: wp("13%"),
    height: hp("7"),
    backgroundColor: "lightgray",
    marginVertical: hp("4%"),
   
  },
  rightText: {
    fontSize: 18,
    color: COLORS.textColor,
  },
});
