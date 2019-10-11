import React, { Component } from 'react';
import {
    StyleSheet,
     View,
     Text,
     TouchableOpacity
    } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
        <View style={styles.container_navbar}>
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
    container_navbar: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    button:{
        backgroundColor:'gray'
    }
  });