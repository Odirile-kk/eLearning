import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import COLORS from "../Const/colors";
import { BiSolidLockAlt } from "react-icons/bi";

const Provide = () => {
  const userData = [
    { num: "01", name: "Class introduction", time: "04:30" },
    { num: "02", name: "Wireframe introduction", time: "08:45" },
    { num: "03", name: "Hi-fi section", time: "10:15" },
    { num: "04", name: "Prototyping", time: "07:00" },
  ];

  // const renderUserCard = ({ item }) => (
  //   <View style={styles.userCard}>
  //     <View style={{ flexDirection: "row" }}>
  //       <View
  //         style={{
  //           width: wp("3%"),
  //           height: hp("6%"),
  //           borderRadius: "50%",
  //           backgroundColor: "lightblue",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           marginTop: hp("1%"),
  //         }}
  //       >
  //         <Text>{item.num}</Text>
  //       </View>

  //       <View
  //         style={{
  //           display: "flex",
  //           flexDirection: "row",
  //           justifyContent: "space-betwen",
  //           marginTop: hp("2%"),
  //         }}
  //       >
  //         <Text style={styles.cardText}>{item.name} </Text>
  //         {/*we are still trying to align the items in the card */}
  //         <View
  //           style={{
  //             backgroundColor: "pink",
  //             flexDirection: "row",
  //             justifyContent: "flex-end",
  //             marginLeft: wp("5%"),
  //             alignSelf: "flex-end",
  //           }}
  //         >
  //           <Text style={styles.cardNum}>{item.time}</Text>
  //           <BiSolidLockAlt />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.header}>
      <View style={styles.provideContatiner}>
        <View style={styles.leftSideContainer}>


          <View style={styles.ringsContatiner2}>
            <View style={styles.ring2}>
              <View style={styles.ring3}>
                <View style={styles.ring4}>
                  <View style={styles.ring5}>
                    <View style={styles.rectangle}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>



          <View style={styles.ringsContatiner}>
            <View style={styles.ring2}>
              <View style={styles.ring3}>
                <View style={styles.ring4}>
                  <View style={styles.ring5}></View>
                </View>
              </View>
            </View>
          </View>




          <View style={styles.glassCard}>
             <View style={{ }}>
              {/* // <FlatList
              //   data={userData}
              //   renderItem={renderUserCard}
              //   keyExtractor={(item) => item.id}
              // /> */}
             </View> 
          </View>



          
        </View>

        <View style={styles.rightSideContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Provide incoherent and clear material
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <Text style={styles.body}>
              We provide video-based classes with consecutive materials and
              ensure that students will understand
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.joinBtn}>
              <Text style={styles.btnTxt}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Provide;

const styles = StyleSheet.create({
  header: {
    // width: wp("100%"),
    // height: hp("80%"),
    // backgroundColor: "pink",
  },
  provideContatiner: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  leftSideContainer: {
    width: wp("55%"),
    height: hp("100%"),
    // backgroundColor: "orange",
    alignItems: "center",
  },
  glassCard: {
    width: 497,
    height: 500,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    // backdropFilter: "blur(10px)",
    alignItems: "center",
    justifyContent: "center",
    top: hp("-40%"),
  },
  rightSideContainer: {
    display: "flex",
    width: wp("40%"),
    flexWrap: "wrap",
    //  marginLeft: '5%'
  },
  titleContainer: {
    width: wp("35%"),
    textAlign: "center",
    marginTop: hp("10%"),
    display: "flex",
  },
  title: {
    color: COLORS.titleColor,
    fontWeight: "bold",
    fontSize: 48,
  },
  bodyContainer: {
    marginTop: hp("6%"),
  },
  body: {
    color: COLORS.textColor,
    fontSize: 24,
  },
  btnContainer: {
    backgroundColor: COLORS.greenBtn,
    borderRadius: 30,
    width: wp("8%"),
    marginTop: hp("6%"),
  },
  joinBtn: {
    padding: 15,
    borderRadius: "50%",
  },
  btnTxt: {
    color: "white",
    fontSize: hp("2%"),
    textAlign: "center",
  },

  userCard: {
    width: wp("30%"),
    height: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  cardText: {
    marginLeft: wp("2%"),
    fontSize: 16,
  },
  cardNum: {
    justifyContent: "flex-end",
  },
  ringsContatiner: {
    flex: 1,
    borderColor: COLORS.textColor,
    marginLeft: wp('15%'),
    marginTop: hp('12%')
  },
  ring2: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("10%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
    justifyContent: "center",
    alignItems: "center",
  },
  ring3: {
    width: wp("14%"),
    height: wp("14%"),
    borderRadius: wp("14%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
    justifyContent: "center",
    alignItems: "center",
  },
  ring4: {
    width: wp("18%"),
    height: wp("18%"),
    borderRadius: wp("18%") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
    justifyContent: "center",
    alignItems: "center",
  },
  ring5: {
    width: wp("22%"),
    height: wp("22%"),
    borderRadius: wp("22  %") / 2,
    borderWidth: 1,
    borderColor: COLORS.greenBtn,
  },
  ringsContatiner2: {
    marginRight: wp('20%'),
    marginTop: hp('12%')
  },
});
