import React, { useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ImageBackgroundComponent } from 'react-native'


export default function Login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [wrongPassword, setWrongPassword] = useState(" ");
  
    const signin = () => {
        if(password == '12345678'){
          navigation.navigate("Home", {
            username: username
          })
        }else{
          setWrongPassword("Password anda salah")
        }
    
      };
    
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector2.png')}>
            <View style = {styles.container}>
                <Text style = {styles.judul}>Movie Mania</Text>
                <Text style = {styles.subJudul}>Welcome</Text>
                <Text style = {styles.subJudul2}>Back</Text>
                <View style = {styles.containerInput}>
                    <TextInput style={styles.input} placeholder="Username" value = {username} onChangeText = { (value) => setUsername(value)}/>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry = {true} value = {password} onChangeText = { (value) => setPassword(value)}/>
                </View>
                <View style = {styles.containerButton}>
                    <TouchableOpacity style={styles.appButtonContainerMasuk} onPress = {signin}>
                        <Text style={styles.iconButton}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <Text>{wrongPassword}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        flexDirection: 'column',
        paddingTop: 39,
        paddingBottom: 39,
        paddingLeft: 28,
        paddingRight: 28,
        flex: 1
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
        color: '#003366',
        fontWeight: 'bold',
    },
    subJudul2: {
        fontFamily: 'Roboto',
        fontSize: 36,
        color: '#003366',
        fontWeight: 'bold',
    },
    containerInput: {
        justifyContent: 'space-evenly'
    },
    input: {
        width: 275,
        height: 35, 
        borderColor: 'gray', 
        borderWidth: 1,
        fontFamily: 'Roboto',
        marginTop: 24,
        padding: 8,
    },
    containerButton: {
        marginTop: 140,
    },
    appButtonContainerMasuk: {
        width: 275,
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
