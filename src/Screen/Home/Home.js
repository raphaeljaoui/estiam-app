//import liraries
import React, { Component, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Value } from '../../../createContext';

// create a component
const DescriptionHome = () => {

    ////////////////   useContext ////////////////////
    const data = useContext(Value);
    // Ne pas oublier de rajouter le Provider dans le component parent pour partager les onfomrations
    
    ////////////////////////////////////////////////
    console.log(data);
    return (
        <View>
            <Text>Description</Text>
        </View>
    )
}
const Home = () => {

    //////////////////////   Hook usestate /////////////////////
    const [data, setData] = useState("toto");

    /////////////////////////////////////////////////////////////

    useEffect(() => {
        console.log('render fonction');
    }, [data])
    return (
        <View style={styles.container}>
            <View style={{flex:1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                <DescriptionHome />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
});

//make this component available to the app
export default Home;
