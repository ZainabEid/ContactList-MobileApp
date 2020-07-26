import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import ContactItem from './ContactItem'
import generateName, {compareNames}  from './../contact'

export default class FlatListContacts extends Component {

  state={
    contacts:[],
  }

  componentDidMount(){
    this.setState({contacts: generateName})
  }
 renderItem = ({item})=> <ContactItem  {...item} />

 sort=()=>{
    this.setState((prevState)=> ({contacts: prevState.contacts.sort(compareNames)  }))
   }

  render(){
    return (
      <View style={styles.container} >
        <Button  title='sort' onPress={this.sort}/>
        <FlatList 
            data={this.state.contacts}
            keyExtractor={item => (item.key.toString())}
            renderItem={this.renderItem}
        />        
      </View>
    );
  
  }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
      },
});
