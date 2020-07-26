import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, SectionList } from 'react-native';
import PropTypes from 'prop-types'

import ContactItem from './ContactItem'

const renderItem = ({item})=> <ContactItem  {...item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListContacts =(props:any)=> {

   const contactsByLetter = props.contacts.reduce((obj,contact)=>{
    const firstLetter= contact.name[0].toUpperCase()
    return{
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || [] ), contact],
    }
   },{})

    const  sections= Object.keys(contactsByLetter).sort().map( harf =>({
        data: contactsByLetter[harf],
        title: harf,
    }))

   return <SectionList
     sections={sections}
     renderItem={renderItem}
     renderSectionHeader={renderSectionHeader} />
}

export default SectionListContacts

SectionListContacts.prototype= {
    contacts: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'flex-start',
        alignItems:'center',
      },
});
