import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

import {List, ListItem} from 'react-native-elements';
//import Footer from  './components/Footer';



export default class App extends Component {
constructor(props){
  super(props)
  this.g = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
  }
}
  componentDidMount(){
    this.makeRequest();
  }

  makeRequest= ()=>{
    const {page, seed} = this.state
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=5`
    this.setState({loading:true})

    fetch(url)
    .then(res => res.json())
    .then(response => {
      this.setState({
        loading: false,
        refreshing: false,       
        error: response.error || null,
        data: page === 1 ? response.results: [...this.state.data, ...response.results]
      })
    })
    .catch(error => {
      this.setState({
        error, loading:false
      })
    })
  }

  renderSeparator = () =>{
    return(
      <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor :' #ced0ce',
        marginLeft: '14%'
      }}
      />
    );
  }

  handleRefresh = ()=>{
    this.setState(
      {
        page: 1,
        seed: this.state.seed +1,
        refreshing:true
      },
      () =>{
        this.makeRequest();
      }
    )
  }

  handleLoadMore= () =>{
    this.setState(
      {
        page:this.state.page+1
      },
      () =>{
        this.makeRequest();
      }
    )
  }
  render() {
    return (
      <FlatList
        data = {this.state.data}
        renderItem = {({item}) =>(
          <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
        )}
        ListFooterComponent = {
          <Text>gkfhdgphk</Text>
          //<Footer hasMore={true} isLoading = {this.state.loading} />
        }

        keyExtractor= {item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        onRefresh = {this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={50}
        

      />
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
