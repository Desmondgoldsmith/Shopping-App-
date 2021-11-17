import React from 'react'
import { StyleSheet,View,Text} from 'react-native'
import {Button} from 'react-native-paper'
import AppScreen from './AppScreen'

export const MainWelcomeScreen = ({navigation}) =>{
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
             <AppScreen style={styles.screen}>
               <View>
                   {/* <Text style={{styles.}}>Dessy Softwares</Text>      */}
               </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn} color="green" mode="contained" icon="email" onPress={()=> navigation.navigate("Login") }>Login</Button>
                    <Button style={styles.btn} mode="contained" color="black" icon="email" onPress={()=> navigation.navigate("Register")}>Register</Button>
                </View>
            </AppScreen>
        </View>
    )
}

// export default MainWelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    screen:{
      justifyContent:"center",
      alignContent:"center"
  },
  btnContainer:{
      padding:10,
      width:"100%",
      backgroundColor:"red",
  },
  btn:{
      padding:10,
      marginVertical:8
  }

})