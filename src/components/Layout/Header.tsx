import AsyncStorage from '@react-native-community/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button as ButtonElement } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome'


interface props extends NativeStackScreenProps<any, any> {

}



const Header = ({ navigation }: props) => {

    const [loading, setLoading] = useState<boolean>(false)

    const logout = async (value: any) => {

        setLoading(true)
        console.log({value})

        await AsyncStorage.removeItem("token")

        setLoading(false)

        navigation.navigate("Login");
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerBtns}>
                <ButtonElement title="Images" onPress={() => navigation.navigate("Images")} />
                <ButtonElement title="Users" onPress={() => navigation.navigate("Users")} />
            </View>
            <ButtonElement
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                        
                    />
                }
                title="Logout"
                onPress={logout}    
                loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerBtns: {
        display: "flex",
        flexDirection: "row",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "10px",
        paddingLeft: "10px",

    }
})

export default Header
