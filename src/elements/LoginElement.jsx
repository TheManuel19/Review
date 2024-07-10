import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import { Input, Image, Button, Icon } from '@rneui/base';
import { isEmpty } from "lodash"

export default function LoginElement() {
    //const [] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(true)
    const [error,setError] = useState({usernameEror:'',password:''})

    const login = () => {
        console.log("entro")
        console.log("datos", username)
        console.log("username: ", password)
        if (isEmpty(username) || isEmpty(password)) {
            setError({ usernameError: 'el usuario es requerido', paswordError: 'la contraseña es requerida' })
        } else {
            setError({ usernameError: '', paswordError: '' })
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2186/2186819.png' }}
                style={{ width: 100, height: 100 }}
            />
            <Input
                placeholder='Usuario'
                label="Usuario"
                labelStyle={styles.label}
                style={{ marginBottom: 16 }}
                onChangeText={event => setUsername(event)}
            />
            <Input
                placeholder='*******'
                label="Contraseña"
                labelStyle={styles.label}
                style={{ marginBottom: 16 }}
                secureTextEntry={true}
                onChangeText={event => setPassword(event)}
            />

            <Button
                title={"Iniciar Sesion"}
                containerStyle={{ width: "80%", borderColor: "pink", borderWidth: 1, borderRadius: 16 }}
                color={"blue"}
                titleStyle={{ color: "red" }}
                icon={<Icon name='Login' type='material-community' color="white" />}
                iconPosition='left'
                onPress={login}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontSize: 12,
        color: "green",
    },


    inputsContainer: {
        width: '80%',
        marginTop: 20,
    },
    input: {
        height: 40,
        marginBottom: 20,
    }
})
