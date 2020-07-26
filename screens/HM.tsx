// this component is created for fixing the homepage bugs
// it has the same functions and the same features

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SectionListContacts from '.././components/SectionListContacts'
import Constans from 'expo-constants'
import generateName, {compareNames}  from '.././contact'


export default class HM extends Component{
 /*    
constructor(props:any){
    super(props);
}*/
    state={
      contacts: [],
      isViewd:false,
      statusAbdateFlag:this.props.route.params.flag,

    } 



    componentDidMount(){
        this.setState({contacts:generateName,
          statusAbdateFlag:false})
       
    }

    //Ubdate state contact problem 
    //componentWillReceiveProps()

    /*
    componentWillReceiveProps(){
        if (this.props.route)
      {const contact = this.props.route.params
      console.log(contact)
      const prevState=this.state
      this.setState({
        contacts: [...prevState.contacts, contact]
        })
      console.log("recieved props")
      console.log(contact)}
    }
    */

    /*
    //Ubdate state contact problem 
    //getDerivedStateFromProps(props, state) : need error budles and understand how to use the props and state attributes
    static getDerivedStateFromProps(props, state) {
      if (this.props.route) {
      const contact = this.props.route.params
      const prevState=this.state
      this.setState({
        contacts: [...prevState.contacts, contact]
      
      })
      console.log(contact)}
    }
    */

    /*
    //Ubdate state contact problem 
    //componentDidUpdate: the traditional way in the video
    componentDidUpdate=(prevProps,prevState)=>{
        if (this.state.contacts!=prevState.contacts){
            const contact = this.props.route.params
            console.log(contact)
            const prevState=this.state
            this.setState({
            contacts: [...prevState.contacts, contact]
            })
        }
        
    }*/

    //Ubdate state contact problem 
    // trying my way using flag to ubdate the state
    statusUbdate=()=>{
      const contact = this.props.route.params.contact
      const prevState=this.state
      this.setState({
        contacts: [...prevState.contacts, contact],
        statusAbdateFlag:false
      
      })
    }

    pressed=()=>{
        const prevState=this.state
        this.setState({isViewd:!prevState.isViewd,})
    } 


    render(){

      if(this.statusAbdateFlag){
        this.statusUbdate()
      }
        return(
          <View style={styles.container}>
            <Text style={styles.text}> Contact List App</Text>
            <Button  title='Add Contact' onPress={()=>this.props.navigation.navigate('AddContact')}/>
            <Button  title='Toggle Contact' onPress={this.pressed}/>
            {this.state.isViewd &&
             <SectionListContacts  contacts={this.state.contacts}/>
           }
         </View>
        )
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
  