import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default class HomeClass extends Component {
    constructor(props) {
        super(props),
        this.state = {
            data: "toto",
        }
    }

    componentDidMount () {
        console.log('render');
    }
    changeState = () => {
        this.setState({
            data: "tata"
        })    
    }
    render() {
      console.log(this.state);
    return (
      <View>
          <Text>home class</Text>
          <Text>{this.state.data}</Text>
        <Button title='change' onPress={this.changeState}/>
      </View>
    )
  }
}
