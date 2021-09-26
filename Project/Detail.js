import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

export default function Detail({route, navigation}) {
    const { name, poster, rating, info } = route.params;
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector5.png')}>
            <View style = {styles.container}>
                <View style = {styles.containerHeader}>
                    <Image style = {styles.imgPoster} source = {{uri: `https://image.tmdb.org/t/p/w500/${poster}`}} />
                    <Text style = {styles.textNama}>{name}</Text>
                    <Text style = {styles.textRating}>{rating}</Text>
                </View>
                <View style = {styles.containerIsi}>
                    <Text style = {styles.textSubJudul}>Overview</Text>
                    <View style = {styles.horizontalLine}></View>
                    <Text style = {styles.textOverview}>{info}</Text>
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
        marginTop: 24,
        padding: 28,
        flex: 1,
        flexDirection: 'column'
    },
    containerHeader: {
        alignItems: 'center'
    },
    imgPoster: {
        width: 112,
        height: 181,
        resizeMode: 'stretch',
    },
    textNama: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontWeight: '400',
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
        width: 314,
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
        fontSize: 12,
        textAlign: 'left',
        marginTop: 8,
        width: 271,
        marginBottom: 12
    }

})
