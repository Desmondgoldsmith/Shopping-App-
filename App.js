import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ProductContext, ProductContextProvider } from './src/context/ProductContext';
import { AppNavigation } from './src/Navigations'


export default function App() {
  return (
   
<ProductContextProvider>
    <AppNavigation/>
    </ProductContextProvider>
  )
}
// export default app