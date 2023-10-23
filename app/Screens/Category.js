import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { PiCaretDownLight } from "react-icons/pi";
import COLORS from "../Const/colors";
import { Card, Title, Paragraph } from "react-native-paper";
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

// import { BsChevronRight, BsChevronLeft, BsStarFill, BsCodeSlash } from "react-icons/bs";
// import {GoPerson, GoCodeReview} from 'react-icons/go'

const Category = () => {
  const cardsData = [
    {
      id: "1",
      title: "Logo Branding",
      image: require("../assets/journal-2850091_1280.jpg"), 
      description: "Graphic Design",
      number: "4.9K",
      price: "$ 21,00",
      rating: "4.9",
    },
    {
      id: "2",
      title: "HTML & CSS",
      image: require("../assets/journal-2850091_1280.jpg"), 
      description: "Development",
      number: "4.3K",
      price: "$ 25,00",
      rating: "4.9",
    },
    {
      id: "3",
      title: "Business marketing",
      image: require("../assets/journal-2850091_1280.jpg"), 
      description: "Development",
      number: "2.8K",
      price: "$ 17,00",
      rating: "4.9",
    },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Most Popular Course</Text>
        <Text style={styles.body}>
          All Category 
          {/* <PiCaretDownLight size={24}/> */}
          <SimpleLineIcons name="arrow-down" size={20} style={{color: COLORS.greenBtn, marginLeft: wp('2%')}}/>
        </Text>
      </View>

      <View
        style={{
          width: wp("100%"),
          alignSelf: "center",
          alignContent: "center",
          marginTop: hp("8%"),
        }}
      >
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.swipeBtnLeft}>
            {/* <BsChevronLeft size={24} color="white"/> */}
            <SimpleLineIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>

          {cardsData.map((card) => (
            <Card key={card.id} style={styles.card}>
              <Card.Cover source={card.image} style={styles.image} />
              <Card.Content>
                <Title style={styles.cardTitle}>{card.title}</Title>
                <View style={styles.cardContent}>
                  <View style={{flexDirection: 'row'}}>
                    
                    {/* <BsCodeSlash size={6} style={styles.cardIcon}/> */}
                  <Text style={{fontSize: 20, flexDirection: 'row', marginLeft: '3%', color: COLORS.textColor}}> {card.description}       </Text>
                  </View>
                 
                 <View>
                 
                 </View>
                 {/* <GoPerson size={24} color="gray"/>  */}
                 <Octicons name="person" size={24} style={{color: COLORS.textColor}}/>
                  <Text style={{fontSize: 20, color: COLORS.textColor}}> {card.number}</Text>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={{color: COLORS.greenBtn, fontSize: 22, fontWeight: 'bold'}}>{card.price}</Text>
                  
                  <Text style={{fontSize: 19, marginLeft: '20%', color: COLORS.textColor}}>
                    {/* <BsStarFill size={16} color="orange"/>   */}
                    <Entypo name="star" size={24} color="orange" />
                    {card.rating}</Text>
                </View>

              </Card.Content>
            </Card>
          ))}

          <TouchableOpacity style={styles.swipeBtnRight}>
            {/* <BsChevronRight size={24} color="white"/> */}
            <SimpleLineIcons name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  header: {
    width: wp("100%"),
    height: hp("100%"),
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: COLORS.titleColor,
    fontSize: 48,
  },
  body: {
    color: COLORS.greenBtn,
    fontSize: 24,
    marginTop: hp("5%"),
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card: {
    width: 357,
    height: 444,
    backgroundColor: "white",

    color: "white",
  },
  image: {
    height: 257,
    borderRadius: 0,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  swipeBtnLeft: {
    width: wp("4.5%"),
    height: hp("8%"),
    borderRadius: "50%",
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("2%"),
  },
  swipeBtnRight: {
    width: wp("4.5%"),
    height: hp("8%"),
    borderRadius: "50%",
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("2%"),
  },
  cardTitle: {
    fontWeight: "bold",
    color: COLORS.titleColor,
    fontSize: 28,
    marginTop: hp("4%"),
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: '2%',
    marginTop: '4%'
  },
  priceContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: '4%'
  },
  cardIcon: {
    width: wp('2%'),
    height: hp('3.5%'),
    backgroundColor: '#dff8f1',
    borderRadius: '50%',
    color: COLORS.greenBtn
  }
});
