import React, { Component } from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import styles from '../../styles/GlobalStyles'

export default class CongratsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ImageBackground source={require('../../styles/images/congrats.png')} style={{ position: 'absolute', width: 240, height: 240, top: 50 }} />
                <View style={{ marginTop: 300 }}>
                    <Text style={styles.globalText}> Поздравляем вы прошли все задания по переводу! </Text>
                </View>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Button title="Понятно"  onPress={() => this.props.navigation.navigate('Topics')}/>
                </View>
            </View>
        )
    }
}


