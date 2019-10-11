import React, { Component } from 'react';
import {
     Image,
     ScrollView 
    } from 'react-native';

export default class Login extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <ScrollView>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Image source={pic} style={{width: 193, height: 110}}/>
        </ScrollView>
    
        
    );
  }
}