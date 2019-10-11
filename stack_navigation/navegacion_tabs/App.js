
import React, {Component} from 'react';
import {Alert,Platform, StyleSheet, Text, View, AsyncStorage, ActivityIndicator, Button, StatusBar } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'

class Inicio extends Component{
  render(){
    return(
      <View style={styles.container}>
         <Text style={styles.welcome}>Inicio!</Text>
         <Button
         title="Salir"
         onPress={this._signOutAsync}
         />
      </View>
    );
  }
  _signOutAsync = async () =>{
    const userToken = await AsyncStorage.getItem('userToken');
    console.warn(userToken)
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
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

const TabNav = createBottomTabNavigator({
  Home: Inicio,
  Settings: Ajustes
});

class SignInScreen extends Component{
  render(){
    return(
      <View style={styles.container}w>
        <Button title="Entrar" onPress={this._signInAsync}/>
      </View>
    );
  }
  _signInAsync= async () => {
    
    var data = {email: "Nathan@yesenia.net",password:"Nathan"}


  var bonice= await fetch('http://localhost:3000/auth/login',{
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
  }
    })
    .then(response => response.json())
    .catch(err => Alert.alert('No se pudo iniciar sesion'))
    //console.warn(bonice.status)
    bonice.access_token == undefined ? Alert.alert('usuario o contraseña incorrectos'): await AsyncStorage.setItem('userToken', bonice.access_token); 
    await AsyncStorage.getItem('userToken') != undefined? this.props.navigation.navigate('App'): '';
  }
}

class AuthLoadingScreen extends Component{
  constructor(){
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync= async () => {
    
  	
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

const AuthStack = createStackNavigator({SigIn : SignInScreen});

export default createSwitchNavigator(
  {
    Auth:AuthStack,
    App: TabNav,
    AuthLoading:AuthLoadingScreen
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

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
