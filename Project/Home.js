import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'

export default function Home({route, navigation}) {
    const { username } = route.params;

    const film = () => {
        navigation.navigate("DaftarFilm")
    }
    const tvShow = () => {
        navigation.navigate("DaftarTvShow")
    }
    const about = () => {
        navigation.navigate("About")
    }
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector3.png')}>
            <View style = {styles.container}>
                <Text style = {styles.judul}>Movie Mania</Text>
                <Text style = {styles.subJudul}>
                    Selamat Datang {username}{"\n"}
                    di Aplikasi Movie Mania
                </Text>

                <View style = {styles.containerButton}>
                    <TouchableOpacity style={styles.buttonMovie} onPress = {film}>
                        <Text style={styles.textButton}>Daftar Film</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTvShow} onPress = {tvShow}>
                        <Text style={styles.textButton}>Daftar TV Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAbout} onPress = {about}>
                        <Text style={styles.textButton}>About Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    container: {
        padding: 32,
        flex: 1,
        flexDirection: 'column'
    },
    judul: {
        fontFamily: 'Roboto',
        fontSize: 48,
        color: '#003366',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    subJudul: {
        marginTop: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#25A9E0',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18
    },
    containerButton: {
        flexDirection: 'column',
        marginTop: 40,
    },
    buttonMovie: {
        marginTop: 26,
        height: 53,
        backgroundColor: "#003366",
        borderRadius: 13,
        paddingTop: 14,
        paddingLeft: 14,
    },
    buttonTvShow: {
        marginTop: 26,
        height: 53,
        backgroundColor: "#25A9E0",
        borderRadius: 13,
        paddingTop: 14,
        paddingLeft: 14,
    },
    buttonAbout: {
        marginTop: 26,
        height: 53,
        backgroundColor: "#4D525D",
        borderRadius: 13,
        paddingTop: 14,
        paddingLeft: 14,
    },
    textButton: {
        fontFamily: 'Roboto',
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
    },
})
