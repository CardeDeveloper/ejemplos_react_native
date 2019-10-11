
import React, {Component} from 'react';
import { 
  StyleSheet, Text, View, Button, Modal, TouchableHighlight, Image, ScrollView
} from 'react-native';



export default class App extends Component{
  state = {
    modalVisible: false,
    comments:[]
  }
  showComments = () =>{
   this.setState({modalVisible: true})
   //console.warn(this.state.modalVisible)
  }
  loadComments = ()=>{
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(res => {
    this.setState({
          comments:  [...this.state.comments, ...res],
          
        });
  })
  }

commentsRender() {
  return this.state.comments.map((data) =>{
    return(
      <View style={styles.commentContainer}>
        <Image
        style={{width:50, height:50}}
        source={{uri: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png'}}
        />
        <View style={styles.textComment}>
          <Text style={styles.titleComment}> {data.name}</Text>
          <Text style={styles.bodyComment}>{data.body}</Text>
        </View>
      </View>
    )
  })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
        title="Comentarios"
        onPress={this.showComments}
        />
       <Modal
         animationType = "fade"
         transparent={false}
         visible={this.state.modalVisible}
          onShow={this.loadComments}
         >
         <View style={{marginTop: 30}}>
           <TouchableHighlight
           style={styles.closeSymbol}
           onPress={() =>{this.setState({modalVisible:false})}}
           >
           
             <Text>X</Text>
           </TouchableHighlight>

           <ScrollView>
             {this.commentsRender() }
            </ScrollView>
         </View>
       </Modal>
      </View>
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
  closeSymbol:{
    alignSelf: 'flex-end',
    marginRight:20,
  },
  commentContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10
  },
  textComment:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  titleComment:{
    fontSize:20,
    fontWeight: 'bold'
  },
  bodyComment:{
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
    padding: 3,
  }
});
