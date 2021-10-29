import React from 'react';
import  {NavigationContainer} from '@react-navigation/native'
import { TabNav } from "./TabNav";

export const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <TabNav/>
            </NavigationContainer>
    )
}