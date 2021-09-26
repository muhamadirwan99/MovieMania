import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function DaftarFilm({navigation}) {
    const [name, setName] = useState("")
    const [items, setItems] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({})
    const [apiKey, setApiKey] = useState("1e6a3a26e31ff7d7b36096f14da05883")

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => {
            const data = (res.data.results)
            console.log('res: ', data)
            setItems(data)
            setName(data.title)
        })
    }

    const onSelectItem = () =>{
        navigation.navigate("Detail", {
            name: name,
        })
    }

    const Item = ({overview, poster, name, rating, info}) => {
        return(
            <TouchableOpacity onPress = {() => {
                navigation.navigate("Detail", {
                    name: name,
                    poster: poster,
                    rating: rating,
                    info: overview
                })
            }}>
                <View style = {styles.containerIsi}>
                    <View style = {styles.containerKiri}> 
                        <Image style = {styles.imgPoster} source = {{uri: `https://image.tmdb.org/t/p/w500/${poster}`}}></Image>
                    </View>
                    <View style = {styles.containerKanan}>
                        <View style={styles.verticleLine}></View>
                        <View style = {styles.containerList}>
                            <View style = {styles.containerIcon}>
                                <Image style = {styles.icon} source = {require('./assets/movie.png')}/>
                                <Text style = {styles.textIsi}>{name}</Text>
                            </View>
                            <View style = {styles.containerIcon}>
                                <Image style = {styles.icon} source = {require('./assets/star.png')}/>
                                <Text style = {styles.textIsi}>{rating}</Text>
                            </View>
                            <View style = {styles.containerIcon}>
                                <Image style = {styles.icon} source = {require('./assets/medal.png')}/>
                                <Text style = {styles.textIsi}>{info}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <ImageBackground style={styles.bg} source = {require('./assets/Vector4.png')}>
            <View style = {styles.container}>
                <Text style = {styles.judul}>Daftar{'\n'}Film</Text>
            </View>
            <ScrollView>
                {items.map(movie => {
                    return <Item overview = {movie.overview} poster = {movie.poster_path} name = {movie.title} rating = {movie.vote_average} info = {movie.popularity}/>
                })}
            </ScrollView>
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
        flexDirection: 'row',
        marginLeft: 10,
    },
    containerList: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    icon: {
        width: 24,
        height: 24,
        alignSelf: 'center'
    },
    containerText: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-evenly'
    },
    textIsi: {
        width: 135,
        marginLeft: 10,
        color: '#003366',
        fontSize: 12,
        fontFamily: 'Roboto',
        alignSelf: 'center'
    }
})
