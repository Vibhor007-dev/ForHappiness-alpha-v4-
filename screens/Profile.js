import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ImageBackground, Platform } from 'react-native'

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Profile Screen</Text>
                </View>


                <TouchableOpacity>
                    style={styles.button}
                   

                    <Text>Click here to Sign In</Text>
                </TouchableOpacity>
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
});