import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Value } from './createContext';
import { Home } from './src/Screen/Home';
import HomeClass from './src/Screen/Home/HomeClass';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth, fireDB} from './firebase';

function HomeScreen({navigation}) {
 /////////////////    Hook useEffect   ///////////////////////
  useEffect(() => {
    const callApi = async() => {
      const response  =  await fetch("https://reactnative.dev/movies.json");
      const res = await response.json();
      console.log(res);
    }

    callApi();
  }, [])
  //////////////////////////////////////////////////////////////


  
  //////////////////////     Async storage     //////////////////////////////

  const postStorage = () => {
    AsyncStorage.setItem('name', JSON.stringify({name: "raphael"}))
    .then(() => {
      console.log('success');
    })
  }

  const getStorage = () => {
    AsyncStorage.getItem('name').then(res => {
      console.log('res getItem', res);
    })
  }

  const deleteStorage = () => {
    AsyncStorage.removeItem('name').then(() => {
      console.log("delete");
    })
  }

 ////////////////////////////////////////////////////////////////////////////////


  ///////////////////////   Firebase action          ////////////////////////////
  useEffect(() => {
    fireDB.collection('user').onSnapshot(res => {
      res.forEach(element => {
        console.log(element.data());
      })
    })
  }, [])
  const postCollection = () => {
    fireDB.collection("user").add({
      name: "raphael"
    })
  }
  const updateCollection = () => {
    fireDB.collection("user").doc("yGW6yHP27I5LtYXKqLy3").update({name: "toto", firstname: "test"})
  }

  const deleteCollection = () => {
    fireDB.collection("user").doc("yGW6yHP27I5LtYXKqLy3").delete();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button title='set item' onPress={postStorage}/>
      <Button title='get item' onPress={getStorage}/>
      <Button title='delete item' onPress={deleteStorage}/> */}
    <Button title='post storage' onPress={postCollection}/>
    <Button title='put storage' onPress={updateCollection}/>
    <Button title='delete storage' onPress={deleteCollection}/>

    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////


////////////////////////   Navigation   ////////////////////////////////////
function DetaimScreen({route}) {
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetaimScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
/////////////////////////////////////////////::////////////////////////