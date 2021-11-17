import React from 'react'
import { StyleSheet,View,Text,FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import cartItems from '../components/CartItems/cartItems'
import { AuthNav } from '../Navigations/AuthNav'
import {AppScreen} from './AppScreen'
import {CartItems} from '../components/CartItems/cartItems'

const CartScreen  = () =>{
    const cart = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    return(
        <View style={styles.container}>  
            <AppScreen style={{flex:1}}>
              <FlatList
                 data={cart}
                 keyExtractor={(item)=>item.id}
                 renderItem={({item})=> <cartItems items={item}/>}
              /> 
              <View style={styles.bottomContent}>

                  <Text style={styles.bottonText}>Total Amount : Ghc{totalPrice}</Text>
                  <Button icon="cart" color="#eee" style={{backgroundColor:"#"}}>
                      <Text>CHECKOUT</Text>
                  </Button>
              </View>
            </AppScreen>
        </View>
     )
}

export default CartScreen
const styles  = StyleSheet.create({
    container:{

    }
})