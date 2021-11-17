import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {AppScreen} from './AppScreen'
import {Button, TextInput} from 'react-native-paper'
import {HomeScreen} from './HomeScreen'
import {AuthNav} from '../Navigations/AuthNav'

const LoginScreen=({navigation})=> {
    return (
        <AppScreen style={StyleSheet.screen}>
            <View style={StyleSheet.form}>
            
                <TextInput mode="outlined" label="Email"/>
                <TextInput mode="outlined" color="black" label="Password"/>
            
          </View>
          <View style={{marginVertical:10,padding:10}}>
              <Button mode="contained" color='black' icon="email" style={{padding:10}}  onPress={()=> navigation.navigate("HomeScreen")}>Login</Button>
          </View>
    </AppScreen>
    )
}
export default LoginScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    form:{
        padding:10,
        width:"100%",
        backgroundColor:"black",
        borderRadius:10,  
}
})