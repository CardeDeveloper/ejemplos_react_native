import React, {Component} from 'react';
import { StyleSheet, Text, View,NetInfo} from 'react-native';
import MapView, {Marker} from 'react-native-maps';




export default class App extends Component{

  constructor(props) {
    super(props);
    this.state={
      region:this.getInitialState().region
    }
  }

  
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(reg) {
    console.warn(reg.latitude);
    /*NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.warn('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    });*/
    /*NetInfo.isConnected.fetch().done(
      (isConnected) => { console.warn(isConnected) }
    )*/
    
  }
  render() {
    return (

    //   <MapView
    //   width={400}
    //   height={300}
    //   initialRegion={{
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    // />
      
        <MapView
        width={380}
        height={300}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    >

    <Marker
      coordinate={{latitude: 37.78825,
        longitude: -122.4324}}
        title={"title"}
        description={"description"}
    />
    </MapView>
      
    );
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
