import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({
 route
}) {
  const { item } = route.params;

  const [priceDiscount,setpriceDiscount] = useState(item.price);
  const calPrice = () => {
      const discountedPrice  = setpriceDiscount(item.price - item.price*item.sale/100)
  };

  useEffect(() => {
    calPrice();
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={item.imageURL} style={styles.img} />
      </View>
      <View style={styles.nameItem}>
        <Text style={styles.textNameItem}>{item.name}</Text>
      </View>
      <View style={styles.discountItem}>
        <Text style={styles.textDiscountItem}>{item.sale}% OFF |</Text>
        <Text style={styles.textPrice}> {priceDiscount}$ </Text>
        <Text style={styles.textPriceInit}> {item.price}$ </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Description</Text>
      </View>
      <View style={styles.discription}>
        <Text style={styles.textDiscription}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.viewAddToCard}>
        <Text style={styles.addToCard}>Add To Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    magin: 10,
  },
  img: { width: '80%', height: 300 },
  viewShopName: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameItem: {
    margin: 10,
  },
  textNameItem: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  discountItem: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  textPriceInit: {
    fontWeight: 'bold',
    marginLeft: 40,
    textDecorationLine: 'line-through',
  },
  discription: {
    marginHorizontal: 20,
  },
  viewAddToCard: {
    marginHorizontal: 40,
    marginTop: 30,
    backgroundColor: '#E94141',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  addToCard: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FEFEFE',
  },
});
