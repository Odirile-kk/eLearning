import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const Swipe = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    swiperRef.current.scrollBy(1);
  };

  const goPrev = () => {
    swiperRef.current.scrollBy(-1);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        style={styles.swiperContainer}
        showsButtons={false}
        loop={false}
      >
        <Card title="Card 1" content="This is the content of Card 1." />
        <Card title="Card 2" content="This is the content of Card 2." />
        <Card title="Card 3" content="This is the content of Card 3." />
      </Swiper>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={goPrev}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goNext}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    height: 200, // Set the height as needed
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default Swipe;
