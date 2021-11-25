import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ImageBackground, Platform, Dimensions, ScrollView} from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import db from '../config';
import { FlatList } from 'react-native-gesture-handler';
//import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;

export default class Joke extends React.Component {
    constructor() {
        super();
        this.state = {
            jokeData: []
        }
    }
    componentDidMount = async () => {
        const querySnapshot = await getDocs(collection(db, "Jokes"));
        querySnapshot.forEach((doc) => {
            this.setState({
                jokeData: [...this.state.jokeData, doc.data()]
            })
        });
        console.log(this.state.jokeData)
    }
    keyExtractor = (item, index) => index.toString();
    renderItem = ({ item: jokeElement }) => {
        return (
            <View>
                <Image
                    source={{ uri: jokeElement.jokeImage }}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={styles.jokeText}>{jokeElement.joke} </Text>
                <Text style={styles.jokeAuthorText}>The author of the joke - {jokeElement.jokeAuthor}</Text>



            </View>

        )
    }
    render() {
        return (
            <View>
            <ScrollView>
                <ImageBackground source={{uri:"https://media.istockphoto.com/photos/crazy-funny-background-picture-id1219281579?b=1&k=20&m=1219281579&s=170667a&w=0&h=eyfrpLopstGEJQOiZTbt3ChFJSjsfITM1lqKNS-H0aY="}} style={{width:windowWidth, height:windowHeight}}>

                <Text style={{ alignSelf: "center", fontFamily: "Open Sans", fontSize: 40 }}>Joke Screen</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    data={this.state.jokeData}

                />
                </ImageBackground>
                </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    jokeAuthorText: {
        fontFamily: "arial",
        fontSize: 30
    },
    jokeText: {
        fontFamily: "verdana",
        fontSize: 40
    }
})