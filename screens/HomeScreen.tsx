import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import Constans from 'expo-constants'

import SectionListContacts from '.././components/SectionListContacts'
import generateName, {compareNames}  from '.././contact'


export default class HomeScreen extends Component {

 state={
    contacts: [],
    isViewd:false,
  }
  
  // componentWillReceiveProps(){
        
  //   const contact = this.props.route.params
  //   const prevState=this.state
  //   this.setState({
  //     contacts: [...prevState.contacts, contact]
    
  //   })
  //   console.log(contact)
  // }

  
  

 componentDidMount(){
    this.setState({contacts:generateName})
    console.log('component did mount')
  } 

    
  // sort=()=>{
  //   this.setState((prevState)=contacts> ({contacts: prevState.contacts.sort(compareNames)  }))
  //  } 

  pressed=()=>{
    const prevState=this.state
    this.setState({isViewd:!prevState.isViewd,})
  }

//   addContact=()=>{
//     const prevState=this.state
//     this.setState({add:!prevState.add,})
//   }

//   pushToList=( contact )=>{
//     console.log(contact)
//     const prevState=this.state
//     this.setState({
//       contacts: [...prevState.contacts, contact]
//     })
//   }

  
  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Contact List App</Text>
        <Button  title='Add Contact' onPress={()=>this.props.navigation.navigate('AddContact')}/>
        <Button  title='Toggle Contact' onPress={this.pressed}/>
        { this.state.isViewd && 
          <SectionListContacts  contacts={this.state.contacts}/>
        }
      </View>
    );
  
  }
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constans.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
  
});
