import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useAsyncStorage } from '@react-native-community/async-storage'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { login } from '../../provider'

interface props extends NativeStackScreenProps<any, any> {

}

const Login = ({ navigation }: props) => {

 
    const Storage = useAsyncStorage("token");

    const initialState = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handlerSubmit = async () => {

        setIsLoading(true)

        const res = await login(formData);

        if (!res.data) return console.log({ error: "Failed" });

        console.log({ data: res.data });

        Storage.setItem(res.data.token);

        navigation.navigate("Home");

        setIsLoading(false)
    }

    const handlerChange = (property: string, value: string) => {

        setFormData((e: any) => ({ ...e, [property]: value }))

    }


    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='#ccc'
                        />
                    }
                    onChangeText={value => handlerChange("email", value)}


                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key', color: '#ccc' }}
                    onChangeText={value => handlerChange("password", value)}
                    secureTextEntry={true}
                />

            </View>
            <Button title="Enter" style={styles.button} loading={isLoading} onPress={handlerSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        // backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: "300px"
    },
    viewInput: {

        width: '80%'
    }
})



export default Login
