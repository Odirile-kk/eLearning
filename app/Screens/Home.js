import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import Navbar from "./Navbar";
import COLORS from "../Const/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BiSearch } from "react-icons/bi";
import { Input } from "react-native-elements";
import Stats from "./Stats";
import Services from "./Services";
import Provide from "./Provide";
import Category from "./Category";
import Reviews from "./Reviews";
import Footer from "./Footer";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Navbar />
          </View>

          <View>
            <View style={styles.ringsContatiner}>
              <View style={styles.ring3}>
                <View style={styles.ring4}>
                  <View style={styles.ring5}>
                    <View style={styles.rectangle}></View>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  Add your knowledge wherever and whenever
                </Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  add your knowledge and insights wherever it is with us.
                  Provides relaxing and not boring learning.
                </Text>

                <View style={styles.textInputContainer}>
                  {/* <BiSearch
                size={24}
                color="gray"
                style={{ marginRight: wp("1%") }}
              /> */}
                  <AntDesign name="search1" size={24} color="black" />
                  <TextInput
                    placeholder="Find Course.."
                    placeholderTextColor="gray"
                    style={styles.textInput}
                  />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                  <Text style={styles.searchBtnTxt}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ringsContatiner2}>
              <View style={styles.ring3}>
                <View style={styles.ring4}>
                  <View style={styles.ring5}>
                    <View style={styles.rectangle2}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/*Second setion */}
          <View>
            <Stats />
          </View>

          {/*Services screen */}
          <View>
            <Services />
          </View>

          {/*Provide section */}
          <View>
            <Provide />
          </View>

          {/*Category */}
          <View>
            <Category />
          </View>

          {/*Reviews */}
          <View>
            <Reviews />
          </View>

          {/*Footer */}
          <View>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    // flexWrap: 'wrap'
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: hp("2%"),
    // marginLeft: wp("1%"),
    flexWrap: "wrap",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: COLORS.titleColor,
    fontWeight: "bold",
    fontSize: hp("8%"),
    // backgroundColor: 'gray',
    width: wp("50%"),
    height: hp("30%"),
  
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
   
  },
  text: {
    color: COLORS.textColor,
    fontSize: hp("3%"),
    textAlign: "center",
    width: wp("40%"),
  },
  textInputContainer: {
    width: wp("45%"),
    // marginTop: hp("7%"),
    backgroundColor: "white",
    flexDirection: "row",
    padding: hp("4%"),
    borderRadius: 50,
  },
  textInput: {
    fontSize: 20,
  },
  searchBtn: {
    backgroundColor: COLORS.orangeBtn,
    marginLeft: wp("38%"),
    width: wp("12%"),
    padding: hp("4%"),
    borderRadius: 50,
    marginTop: hp("-11%"),
  },
  searchBtnTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  ringsContatiner: {

    borderColor: COLORS.textColor,
    marginLeft: wp("4%"),
   
  },
  ringsContatiner2: {
    alignItems: "flex-end",
    marginRight: wp("3%"),
    // marginTop: hp("-20%"),
  },
  ring3: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: wp("20%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.5,
  },
  ring4: {
    width: wp("24%"),
    height: wp("24%"),
    borderRadius: wp("24%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
    justifyContent: "center",
    alignItems: "center",
  },
  ring5: {
    width: wp("28%"),
    height: wp("28%"),
    borderRadius: wp("28%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
  },
  rectangle: {
    width: wp("15%"),
    height: hp("45%"),
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomRightRadius: wp("20%") / 2,
    borderBottomLeftRadius: wp("20%") / 2,
    borderTopRightRadius: wp("1%"),
    borderTopLeftRadius: wp("1%"),
    // marginTop: hp("-1%"),
  },
  rectangle2: {
    width: wp("15%"),
    height: hp("48%"),
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomRightRadius: wp("20%") / 2,
    borderBottomLeftRadius: wp("20%") / 2,
    borderTopRightRadius: wp("1%"),
    borderTopLeftRadius: wp("1%"),
    marginTop: hp("-3%"),
  },
});
