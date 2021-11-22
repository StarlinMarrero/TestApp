import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Badge, Card, Image } from 'react-native-elements'
import Layout from '../components/Layout'
import { getUser } from '../provider'

const Users = () => {

    const [users, setUsers] = useState<any>([])

    const getUsers = async () => {
        const users = await getUser();

        if(!users.data) return console.log("error", users);

        setUsers(users?.data?.users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Layout>
            <View>
                <Card>
                    <Card.Title>List Of Users</Card.Title>
                    <Card.Divider />
                    {
                        users.map((u: any, i: number) => {
                            return (
                                <View key={i} style={styles.containerUser}>
                                    <Image
                                       
                                        resizeMode="cover"
                                        style={{ width: 50, height: 50 }}
                                        source={{ uri: "https://img.icons8.com/fluency/120/000000/user-male-circle.png"}}
                                        
                                    />
                                    <Text >{u.firstName} {u.lastName}</Text>
                                    <Badge value={u.tipoCuenta.nombre_tipo_cuenta} status={u.tipoCuenta.nombre_tipo_cuenta === "Admin" ? "error" : "primary"} />
                                 
                                </View>
                            );
                        })
                    }
                </Card>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    containerUser: {
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        justifyContent: "space-between"
        
    }
})

export default Users
