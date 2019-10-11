import React, {Component} from 'react';
import {Alert,Platform, StyleSheet, Text, View, AsyncStorage, ActivityIndicator, Button, StatusBar } from 'react-native';

export default class Card extends Component {
    render() {
      return (
          <View style={styles.container}>
          <TouchableOpacity
           style={styles.button}
           onPress={login}
         >
           <Text> Login </Text>
         </TouchableOpacity>
          </View>
      
          
      )
    }
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      button:{
          backgroundColor:'gray'
      }
    });