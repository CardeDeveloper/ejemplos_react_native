import React, {Component} from 'react';
import {  
  StyleSheet, 
  Text, 
  View,
  Image,
  Button,
  Flatlist,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

class Card extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      data: []
    }
  }

  componentDidMount =()  =>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(res => { 
      this.setState({
        data: [...this.state.data, ... res],
      })
    })
    console.warn(this.state.data)
  }
  
  render (){
    
    let img = {
      url:'https://i.pinimg.com/originals/1e/7c/3d/1e7c3d75b5204aa0df8734da77678670.png'
    }

    metodoCreated = () =>{
      console.warn('comentarios')//Crear mensajes directo a la vista
    }

    return (
      <View></View>
      // <Flatlist
      
      //   data={this.state.data}
      //   rederItem = {({item}) => 
      //     <View style={ styles.containerCard }> 
      //       <Text style={ styles.txtTiulo}>{ item.title}</Text>
      //       <View style={ styles.containerImg }>
      //         <Image style={styles.img} source={ img } />
      //       </View> 
      //       <Text style={ styles.txtSubTiulo }> Descripcion </Text>
      //       <Text style={ styles.welcome }>{item.body}</Text>

      //       <View style={ styles.containerBtn }>
      //         <ImageBackground imageStyle={{resizeMode: 'stretch'}} style={styles.imgIcon} source={require('./assets/comentarios.png')}>
      //             <TouchableOpacity style={styles.test} underlayColor={ 'transparent' } onPress={ metodoCreated }>
      //             </TouchableOpacity>
      //         </ImageBackground>

      //         {/* <Button
      //         style={ styles.btn }
      //         title='Comentarios'
      //         onPress={ metodoCreated }
      //         color='#fff'
      //         /> */}
      //       </View>
      //     </View>        
      //   }
      // /> 
    );
  }
}  

//LOGIN
class SingInScreen extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      username: 'user',
      pass: 'pass',
      token: ''
    }
  }
  


  render(){
    return(
      <View style={styles.container}>
        <View>
          <TextInput
          style={styles.input}          
          placeholder='E-mail'
          keyboardType='email-address'
          onChangeText = { (txtusername) => this.setState({username: txtusername}) }
          />
          <TextInput
          style={styles.input}
            placeholder='Password'
            secureTextEntry = { true }
            onChangeText = { (txtpass) => this.setState({pass: txtpass}) }
          />
        </View>
        <View style={styles.ContentbtnsLogin}>
          <Button
          styles={styles.btnLogin}
          title='SingIn'
          onPress={this._singInAsync}
          />

          <Button
          styles={styles.btnLogin}
          title='Register'
          onPress={this._singInAsync}
          />
        </View>

      </View>
    );
  }
  
  // Metodos ASINCRONO
  _singInAsync = async () => {
    var urlP = 'http://localhost:3000/auth/login';
    var data = { "email": this.state.username, "password":this.state.pass }
    var Tokenpass = ''

    // await AsyncStorage.setItem('userToken', 'abc')
    await fetch(urlP , {
          method: "POST", 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => {
          Tokenpass = res.access_token
        }) 
      .catch(
        error => {
          Alert.alert(
            'Corre',
            'No es posible iniciar session',
            [
              {text: 'Cancel', onPress: () => console.log(error + 'Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          )
        }
      )
    
    this.setState({
      token: Tokenpass
    })
    if (this.state.token != undefined) {
      this.props.navigation.navigate('App');
    } else {
      Alert.alert(
        'Cuidado',
        'El usuario o constraseña estan incorrectos',
        [
          {text: 'Cancel', onPress: () => console.log(error + 'Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      )
    }

    
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    //permite setear datos del login 
    // this.props.navigation.navigate('App')
  }
}

// Components
// TAB COMPONENTS (MENU) 
class Inicio extends Component{
  render(){
    return(
      <View style={styles.containerTab}>
        <Card/>   
      </View>
    );
  }
}

class Ajuste extends Component{
  render(){
    return(
      <View style={styles.containerTab}>
        <Text style={styles.welcome}>Ajustes</Text>
      </View>
    );    
  }
}

class Perfil extends Component{
  render(){
    return(
      <View style={styles.containerTab}>
        <View>
          <Text style={styles.welcome}>Perfil</Text>
          <Button
          title='Salir'
          onPress={ this._singOutAsync }
          />
        </View>
      </View>
    );   
  }
  _singOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  } 
}

class Comunidad extends Component{
  render(){
    return(
      <View style={styles.containerTab}>
        <Text style={styles.welcome}>Comunidad</Text>
      </View>
    );    
  }
}

// CARGA
class AuthLoadingScreen extends Component{
  constructor(props) {
    super(props)
  
    // obtener 
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  
  render(){
    return(
      <View style={styles.container}>
        {/* Para cuando esta cargando */}
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar 
        backgroundColor="blue"
        barStyle="light-content"/>
      </View>
    );
  }
}


// Navigation
// STACKNAVIGATION
const AuthStack = createStackNavigator({
  SingIn: SingInScreen
});


// TAB NAVIGATOR
const TabNav = createBottomTabNavigator({
  Home: Inicio,
  Settings: Ajuste,
  Profile: Perfil,
  Social: Comunidad
});

//ROOT  SWITCHNAVIGATOR

export default createSwitchNavigator({
    Auth: AuthStack,
    App:TabNav,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName:'AuthLoading'
  }
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  containerImg:{
    flex:0,
    borderWidth:5,
    borderColor: '#000',
    backgroundColor:'#9aa9e5',
  },
  containerCard:{
    flex:1,
    alignItems: 'stretch',
    justifyContent:'center',
    backgroundColor:'#11bddf',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal:20,
  },
  txtTiulo:{
    fontSize:22,
    color:'#fff',
    fontWeight: 'bold',
    margin:10,
    textAlign:'center'
  },
  txtSubTiulo:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold',
    fontStyle: 'italic',
    margin:10,
    textAlign:'center'
  },
  imgIcon:{
    width: 40,
    height: 40,
    margin: 10,
  },
  test:{
    height:50,
    width:50,
  },
  img:{
    height: 250,
    width: 300
  },
  welcome:{
    textAlign:'center',
    fontSize:18,
  },
  containerBtn:{
    flex:0,
    alignItems: 'flex-end',
  },
  input:{
    borderBottomColor: 'black',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    height:50,
    width: 200,
    fontSize:17,
    margin:10
  },
  ContentbtnsLogin:{
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  btnLogin:{
    fontSize:12
  },
  containerTab: {
    flex: 1,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent:'center',
  },

});
