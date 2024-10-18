import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>A premium online store for</Text>
        <Text style={styles.headerText}>sporter and their stylish choice</Text>
      </View>
      <View style={styles.viewImg}>
        <Image source={require('../img/item01.png')} style={styles.img} />
      </View>
      <View style={styles.viewShopName}>
        <Text style={styles.shopName}>POWER BIKE</Text>
        <Text style={styles.shopName}>SHOP</Text>
      </View>
      <TouchableOpacity
        style={styles.viewGetStart}>
        <Text style={styles.getStart}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    marginHorizontal: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 20,
    fontWeight: 'bold',
  },
  viewImg: {
    width: '90%',
    height: 300,
    backgroundColor: '#E941411A',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  img: { width: '70%', height: 200 },
  viewShopName:{
    justifyContent:'center',
    alignItems:'center'
  },
  shopName:{
    fontSize:25,
    fontWeight:'bold'
  },
  viewGetStart:{
    marginHorizontal:40,
    marginTop:30,
    backgroundColor:'#E94141',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  getStart:{
    fontWeight:'bold',
    fontSize:20,
    color:'#FEFEFE',
  },

});
