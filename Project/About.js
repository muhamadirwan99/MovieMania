import React from 'react'
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function About() {
    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector5.png')}>
            <View style = {styles.container}>
                <Text style = {styles.textHead}>About me </Text>
                <View style = {styles.containerProfil}>
                    <Image style = {styles.imgProfil} source = {require('./assets/irwan.jpg')} />
                    <Text style = {styles.txtProfil}>Muhamad Irwan Ramadhan</Text>
                </View>
                <Text style = {styles.textSubtittle}>Skill</Text>
                <View style = {styles.containerProgram}>
                    <Text style = {styles.txtTitle}>Programming Language</Text>
                    <View style = {styles.horizontalLine}></View>
                    <View style = {styles.containerDetail}>
                        <View style = {styles.containerIcon}>
                            <Image style = {styles.icon} source = {require('./assets/javascript.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/kotlin.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/dart.png')}/>
                        </View>
                        <View style = {styles.containerText}>
                            <Text style = {styles.text}>Basic Javascript</Text>
                            <Text style = {styles.text}>Advance Kotlin</Text>
                            <Text style = {styles.text}>Basic Dart</Text>
                        </View>
                        <View style = {styles.containerStar}>
                            <Image style = {styles.icon1} source = {require('./assets/star.png')}/>
                            
                        </View>
                        <View style = {styles.containerStar}>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                        </View>
                        <View style = {styles.containerStar}>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                            <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                        </View>
                    </View>
                </View>
                <View style = {styles.containerFramework}>
                    <Text style = {styles.txtTitle}>Framework</Text>
                    <View style = {styles.horizontalLine}></View>
                    <View style = {styles.containerDetail}>
                        <View style = {styles.containerIcon}>
                            <Image style = {styles.icon} source = {require('./assets/react.png')}/>
                        </View>
                        <View style = {styles.containerText}>
                            <Text style = {styles.text}>React Native</Text>
                        </View>
                        <Image style = {styles.icon2} source = {require('./assets/star.png')}/>
                        <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                            
                    
                    </View>
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
        padding: 19,
        flex:1,
        flexDirection: 'column'
    },
    textHead: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#003366'
    },
    containerProfil: {
        flexDirection: 'row',
        marginTop: 26,
    },
    imgProfil: {
        width: 72,
        height: 72,
        resizeMode: 'stretch',
        borderRadius: 400/2,
    },
    txtProfil: {
        marginLeft: 16,
        alignSelf: 'center',
        color: '#003366',
        fontSize: 13,
        fontStyle: 'Roboto',
        fontWeight: '500'
    },
    textSubtittle: {
        marginTop: 15,
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003366'
    },
    containerDetail: {
        flexDirection: 'row',
    },
    containerProgram: {
        backgroundColor: "#F3F3F3",
        borderRadius: 7,
        width: 314,
        height: 140,
        padding: 14,
        marginTop: 29,
    },
    containerFramework: {
        backgroundColor: "#F3F3F3",
        borderRadius: 7,
        width: 314,
        height: 84,
        padding: 14,
        marginTop: 13,
    },
    txtTitle: {
        fontStyle: 'Roboto',
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
    containerIcon: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    icon: {
        marginTop: 10,
        width: 19,
        height: 19,
    },
    icon1: {
        marginLeft: 100,
        marginTop: 10,
        width: 19,
        height: 19,
    },
    icon2: {
        marginLeft: 140,
        marginTop: 10,
        width: 19,
        height: 19,
    },
    text: {
        marginTop: 10,
        marginLeft: 11,
        color: '#003366',
        fontSize: 14,
        fontStyle: 'Roboto',
        fontWeight: '400',
    },
    containerText: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    containerStar: {
        justifyContent: 'space-evenly',
    }


})
