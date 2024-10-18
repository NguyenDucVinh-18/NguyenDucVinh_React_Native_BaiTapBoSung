import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/item02.png')} style={styles.img} />
      </View>
      <View style={styles.nameItem}>
        <Text style={styles.textNameItem}>Pina Mountain</Text>
      </View>
      <View style={styles.discountItem}>
        <Text style={styles.textDiscountItem}>15% OFF |</Text>
        <Text style={styles.textPrice}> 350$ </Text>
        <Text style={styles.textPriceInit}> 449$ </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Description</Text>
      </View>
      <View style={styles.discription}>
        <Text style={styles.textDiscription}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.viewAddToCard}>
        <Text style={styles.addToCard}>
          Add To Card
        </Text>
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
  discription:{
    marginHorizontal:20
  },
  viewAddToCard:{
    marginHorizontal:40,
    marginTop:30,
    backgroundColor:'#E94141',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  addToCard:{
    fontWeight:'bold',
    fontSize:20,
    color:'#FEFEFE',
  },

});
