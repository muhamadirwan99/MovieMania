import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function DaftarTvShow() {
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector4.png')}>
            <View style = {styles.container}>
                <Text style = {styles.judul}>Daftar{'\n'}TV Show</Text>
            </View>
            <View style = {styles.containerIsi}>
                <View style = {styles.containerKiri}> 
                    <Image style = {styles.imgPoster} source = {require('./assets/poster.jpg')}></Image>
                </View>
                <View style = {styles.containerKanan}>
                    <View style={styles.verticleLine}></View>
                    <View style = {styles.containerIcon}>
                        <Image style = {styles.icon} source = {require('./assets/movie.png')}/>
                        <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                        <Image style = {styles.icon} source = {require('./assets/info.png')}/>
                    </View> 
                    <View style = {styles.containerText}>
                        <Text style = {styles.textIsi}>Nama</Text>
                        <Text style = {styles.textIsi}></Text>
                        <Text style = {styles.textIsi}>Rating</Text>
                        <Text style = {styles.textIsi}></Text>
                        <Text style = {styles.textIsi}>Info</Text>
                    </View> 
                </View>
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
        padding: 28,
    },
    judul: {
        marginTop:29,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 36,
        color: '#003366',
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    containerIsi: {
        height: 128,
        weight: 314,
        borderRadius: 8,
        marginRight: 36,
        marginLeft: 36,
        backgroundColor: '#F3F3F3',
        padding: 13,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5    
    },
    imgPoster: {
        width: 63,
        height: 102,
        resizeMode: 'stretch',
    },
    containerKanan: {
        marginLeft: 23,
        alignContent: 'flex-start',
        flexDirection: 'row'
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    containerIcon: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-evenly'
    },
    icon: {
        width: 24,
        height: 24,
    },
    containerText: {
        flexDirection: 'column',
        marginLeft: 7,
        justifyContent: 'space-evenly',
        flex: 1,
    },
    textIsi: {
        color: '#003366',
        fontSize: 12,
        fontFamily: 'Roboto',
    }
})
