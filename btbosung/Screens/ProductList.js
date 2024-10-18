import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Card } from 'react-native-paper';

const data=[
  {
    id: '1',
    imageURL:require('../img/item01.png'),
    name:'Pinarello',
    price: '1800',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id: '2',
    imageURL:require('../img/item02.png'),
    name:'Pina Mountain',
    price: '1700',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id: '3',
    imageURL:require('../img/item03.png'),
    name:'Pina Bike',
    price: '1700',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id: '4',
    imageURL:require('../img/item04.png'),
    name:'Pinarello',
    price: '1700',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id: '5',
    imageURL:require('../img/item05.png'),
    name:'Pinarello',
    price: '1700',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id: '6',
    imageURL:require('../img/item06.png'),
    name:'Pinarello',
    price: '1700',
    sale: '15%',
    description:"It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
];




export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20, marginLeft: 10 }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 , }}>
          The Word''s BestBike
        </Text>
      </View>
      <View style={styles.viewType}>
        <TouchableOpacity style={[styles.btnType, styles.btnType1]}>
          <Text style={styles.textType}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnType,styles.btnType2]}>
          <Text style={styles.textType}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnType, styles.btnType3]}>
          <Text style={styles.textType}>Mountain</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  viewType:{
    flex:1,
    flexDirection:'row'
  },
  btnType:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    height:25
  },
  btnType1:{
    borderColor:'#E9414187',
    borderWidth:1
  },
  btnType2:{
    borderColor:'yellow',
    borderWidth:1
  },
   btnType3:{
    borderColor:'pink',
    borderWidth:1
  },
  textType:{

  },

});
