import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = [
  {
    id: '1',
    imageURL: require('../img/item01.png'),
    name: 'Pinarello',
    price: 1800,
    sale: 10,
    description: 'description item01',
  },
  {
    id: '2',
    imageURL: require('../img/item02.png'),
    name: 'Pina Mountain',
    price: 1700,
    sale: 15,
    description: 'description item02',
  },
  {
    id: '3',
    imageURL: require('../img/item03.png'),
    name: 'Pina Bike',
    price: 1500,
    sale: 5,
    description: 'description item03',
  },
  {
    id: '4',
    imageURL: require('../img/item04.png'),
    name: 'Pinarello',
    price: 1900,
    sale: 10,
    description: 'description item04',
  },
  {
    id: '5',
    imageURL: require('../img/item05.png'),
    name: 'Pinarello',
    price: 2700,
    sale: 10,
    description: 'description item05',
  },
  {
    id: '6',
    imageURL: require('../img/item06.png'),
    name: 'Pinarello',
    price: 1300,
    sale: 12,
    description: 'description item06',
  },
   {
    id: '6',
    imageURL: require('../img/item06.png'),
    name: 'Pinarello',
    price: 1300,
    sale: 12,
    description: 'description item06',
  },
];

const BikeItem = ({ item, onPress }) => (
  <Pressable onPress={onPress}>
    <View style={styles.viewItem}>
      <Image source={item.imageURL} style={styles.imgItem} />
      <View>
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>$ {item.price}</Text>
      </View>
    </View>
  </Pressable>
);

export default function App({ navigation }) {
  const toDetail = () => {
    navigation.navigate('Detail', { name: item.name });
  };
  return (
    <View>
      <View style={{ marginVertical: 20, marginLeft: 10 }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>
          The Word''s BestBike
        </Text>
      </View>
      <View style={styles.viewType}>
        <TouchableOpacity style={[styles.btnType, styles.btnType1]}>
          <Text style={styles.textType}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnType, styles.btnType2]}>
          <Text style={styles.textType}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnType, styles.btnType3]}>
          <Text style={styles.textType}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{flex:1}}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <BikeItem
              item={item}
              onPress={() => navigation.navigate('Detail', { item })}
            />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={true}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  viewType: {
    flexDirection: 'row',
  },
  btnType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 25,
  },
  btnType1: {
    borderColor: '#E9414187',
    borderWidth: 1,
  },
  btnType2: {
    borderColor: 'yellow',
    borderWidth: 1,
  },
  btnType3: {
    borderColor: 'pink',
    borderWidth: 1,
  },
  textType: {},
  viewItem: {
    width: 167,
    height: 200,
    backgroundColor: '#F7BA8326',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    width: 135,
    height: 127,
    marginBottom: 20,
    objectFit: 'fill',
  },
});
