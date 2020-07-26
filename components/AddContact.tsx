import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';
import PropTypes from 'prop-types'
import Constans from 'expo-constants'


const AddContact =({navigation})=>{
    //states
    const [name,setName]= useState("")
    const [phone,setPhone]= useState("")
    const [isFormValid,setIsFormValid]=useState(false)

    //name handling
    const nameChange =(e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setName(value)
    }
    //phone handling
    const phoneChange =(e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const phoneNum = e.nativeEvent.text;
        setPhone(phoneNum)
    }
     
    useEffect(()=>{
        const fullname=name.split(' ')
        if(+phone>0 && phone.length === 11 && fullname.length == 2 && fullname[0] && fullname[1] ){
            setIsFormValid(true)
        }else{
            setIsFormValid(false)
        }
    })
    

    return(
       <View style={styles.container}>
           <Text style={styles.title}> Add New Contact </Text>
           <View style={styles.signInRow}>
               
               <Text> Contact Name: </Text>
               <TextInput 
                    style={styles.textField} 
                    placeholder='contact name' 
                    value={name}
                    onChange={nameChange}
                />
            </View>
           <View style={styles.signInRow}> 
                <Text> Contact Phone: </Text>
                <TextInput 
                    keyboardType="numeric"
                    style={styles.textField}
                    placeholder='01x-xxx-xxx-xxxx' 
                    value={phone}
                    onChange={phoneChange}
                /> 
            </View>
           <Button  
                title='Add to Contact List' 
                onPress={()=>{navigation.navigate('HomeScreen', {contact:{name: name,phone : phone},flage:true})}}
                disabled={!isFormValid}
            />

       </View>
    )
}
export default AddContact

const styles = StyleSheet.create({
    container: {
        width:'80%',
        paddingTop: Constans.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 30,
        margin: 20,
    },
    signInRow:{
        flexDirection: 'row',
        marginVertical: 3,

    },
    textField:{
        width: '80%',
        borderWidth:1,
        borderColor: 'gray',
    },
    

})
