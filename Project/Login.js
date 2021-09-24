import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ImageBackgroundComponent } from 'react-native'

export default function Login() {
    return (
        <ImageBackground source = {require('./assets/Vector2.png')}>
            <View style = {styles.container}>
                <Text style = {styles.judul}>Movie Mania</Text>
                <Text style = {styles.subJudul}>Welcome</Text>
                <Text style = {styles.subJudul2}>Back</Text>
                <View style = {styles.containerInput}>
                    <TextInput style={styles.input} placeholder="Username"/>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry = {true}/>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style={styles.appButtonContainerMasuk}>
                        <Text style={styles.iconButton}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 39,
        paddingBottom: 39,
        paddingLeft: 28,
        paddingRight: 28,
        flex: 1
    },
    image: {
        flex: 1,
      },
    judul: {
        fontFamily: 'Roboto',
        fontSize: 48,
        color: '#003366',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subJudul: {
        marginTop: 60,
        fontFamily: 'Roboto',
        fontSize: 36,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    subJudul2: {
        fontFamily: 'Roboto',
        fontSize: 36,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    containerInput: {
        marginTop: 93,
    },
    input: {
        weight: 75,
        height: 35, 
        borderColor: 'gray', 
        borderWidth: 1,
        fontFamily: 'Roboto',
        marginTop: 24
    },
    containerButton: {
        marginTop: 83,
    },
    appButtonContainerMasuk: {
        weight: 40,
        height: 40,
        backgroundColor: "#003366",
        borderRadius: 30,
        paddingTop: 8,

    },
    iconButton: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }, 
})
