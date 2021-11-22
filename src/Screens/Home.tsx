import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout'
import { SpeedDial, Image } from 'react-native-elements'


interface props extends NativeStackScreenProps<any, any> {

}

const Home = (props: props) => {


    const [open, setOpen] = useState(false)
    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => null
        })
    }, [])

    return (
        <View style={styles.container}>
            <Layout>
                {/* <Header navigation={props.navigation} route={props.route} /> */}

                <View style={{ flexDirection: "column", width: '100%', justifyContent: "center", height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../utils/icon.png')} />

                    <View>
                        <Text style={{ fontSize: 30, fontWeight: '600' }}>Bienvenido</Text>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Users")} style={{ backgroundColor: '#fff', padding: 5, borderRadius: 5 }}>
                            <Image style={{ width: 50, height: 50 }} source={require('../utils/users.png')} />
                            <Text style={{ textAlign: 'center' }}>Users</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </Layout>
            <SpeedDial
                color='#1488CC'
                isOpen={open}
                icon={{ name: 'rowing', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    color='#1488CC'
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    color='#1488CC'
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingLeft: 15,
        height: "100%"
    }
})

export default Home
