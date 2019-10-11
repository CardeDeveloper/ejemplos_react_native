import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Comment extends Component {
    render() {
      return (
          <View style={styles.container}>
          
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