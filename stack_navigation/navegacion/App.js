/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Inicio extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Inicio!</Text>
        <Button
        onPress={() => this.props.navigation.navigate('Settings')}
        title="Siguiente ventana"
        />
      </View>
    );
  }
}

class Ajustes extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Ajustes!</Text>
      </View>
    );
  }
}



  const  Root = createStackNavigator({
        Home: Inicio,
        Settings: Ajustes
  },
  {
    initialRouteName:"Settings"
  }
);

export default class App extends Component{
  render() {
    return <Root/> ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
