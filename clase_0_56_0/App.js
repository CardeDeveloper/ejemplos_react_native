import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import Navbar from './components/navbar';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' , password:''};
  };
  
  render() {
    login = () =>{
      Alert.alert(
        'You need to...'
     )
    }
    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Sign in</Text>
        <Text style={styles.instructions}>email</Text>
        <TextInput
        style={styles.inputs}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
      {/* <Text>{this.state.email}</Text>  */}
      <Text style={styles.instructions}>Password</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
      />
      
      {/* <Button
        containerViewStyle={{ marginTop: 50 }}
        onPress={login}
        title="send"
        color="#841584"
        accessibilityLabel="login the application"
        
      /> */}


      <TouchableOpacity
         style={styles.button}
         onPress={login}
       >
         <Text> Login </Text>
       </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 150
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  inputs:{
    marginBottom:30,
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
