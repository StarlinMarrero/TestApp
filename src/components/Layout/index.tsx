import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import Header from './Header'

interface props {

    children: React.ReactNode;
}


const Layout = ({ children }: props) => {
    return (
        <View style={{ height: '100%'}}>
            {children}
        </View>
    )
}

export default Layout
