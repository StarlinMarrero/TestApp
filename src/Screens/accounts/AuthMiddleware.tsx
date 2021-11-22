import AsyncStorage from '@react-native-community/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { Text } from "react-native";

interface props extends NativeStackScreenProps<any, any> {

}

const AuthMiddleware = ({ navigation }: props) => {

    
    const authValidate = async () => {
        const token = await AsyncStorage.getItem("token");

        if(token) {
            
            navigation.navigate("Home");

        }else{
            navigation.navigate("Login");
        }
    }

    useEffect(() => {

        authValidate();

    }, [])

    return (
        <Text>Loading</Text>
    )
}

export default AuthMiddleware
