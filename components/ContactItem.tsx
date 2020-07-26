
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

 const ContactItem = (props) =>{
    return(
      <View style={styles.contact}>
        <Text>{props.name} </Text>
        <Text>{props.phone} </Text>
      </View>
    )
  }
  export default ContactItem
  
const styles = StyleSheet.create({
    contact:{
      marginVertical:5,
    },
  });
  