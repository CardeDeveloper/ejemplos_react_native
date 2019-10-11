import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

 class Card extends Component{
   
   render(){
     return(
       <View>
       <Text>{this.props.title}</Text>
      <Image style={styles.img} source={this.props.picture} />
      </View>
     );
   }
 }

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {text:'Example'};
  }
  methodCreated= () =>{
    console.warn({name: 'nose'})
  }
  render() {
      let pic = {
        url : 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png'
      }
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{this.state.text}</Text>
        {/* <Text style={styles.welcome}>Hola mundo!!</Text> */}
        <Card picture={pic} title='hola'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor: '#F5FCFF',

  },
  input:{
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  
  },
  img:{
    width: 210,
    height: 180
  }

})
/*const styles = StyleSheet.create({
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
