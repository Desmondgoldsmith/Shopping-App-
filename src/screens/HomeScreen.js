import React, {useContext} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import { ProductContext, ProductContextProvider } from '../context/ProductContext'
import { ActivityIndicator } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'

const HomeScreen = () =>{
const {isLoading,products} = useContext(ProductContext)

if(isLoading){
    return(
        <View styles = {styles.prodLoading}> 
            <ActivityIndicator animating={true} size = "large"/>
             <Text style={{marginVertical:10,align:"center"}}>Loading Products</Text>
        </View>
    )
}
// const prods = useContext(ProductContext)
return(
    <View>
<View>
    <FlatList data={products} keyExtractor={(item) => item.id} renderItem={({item})=> console.log(item.title)}/>
</View>
    </View>
)
}
export default HomeScreen

const styles = StyleSheet.create({
    prodLoading:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})