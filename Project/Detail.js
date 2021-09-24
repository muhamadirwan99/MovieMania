import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

export default function Detail() {
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector5.png')}>
            <View style = {styles.container}>
                <View style = {styles.containerHeader}>
                    <Image style = {styles.imgPoster} source = {require('./assets/poster.jpg')} />
                    <Text style = {styles.textNama}>Nama Film</Text>
                    <Text style = {styles.textRating}>Rating</Text>
                </View>
                <View style = {styles.containerIsi}>
                    <Text style = {styles.textSubJudul}>Overview</Text>
                    <View style = {styles.horizontalLine}></View>
                    <Text style = {styles.textOverview}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod lobortis nisi et elementum. Curabitur ante nibh, pulvinar eu arcu vitae, eleifend sollicitudin nibh. </Text>
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
        padding: 28,
        flex: 1,
        flexDirection: 'column'
    },
    containerHeader: {
        alignItems: 'center'
    },
    imgPoster: {
        width: 86,
        height: 139,
        resizeMode: 'stretch',
    },
    textNama: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontWeight: '450',
        fontSize: 14,
        color: '#003366'
    },
    textRating: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 13,
        color: '#003366'
    },
    containerIsi: {
        backgroundColor: '#F3F3F3',
        borderRadius: 7,
        weight: 314,
        paddingTop: 4,
        paddingRight: 24,
        paddingLeft: 24,
        marginTop: 32
    },
    textSubJudul: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        color: '#003366'
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#909090',
        marginTop: 4,
    },
    textOverview: {
        fontFamily: 'Roboto',
        fontSize: 11,
        textAlign: 'left',
        marginTop: 8,
        width: 271,
        marginBottom: 12
    }

})
