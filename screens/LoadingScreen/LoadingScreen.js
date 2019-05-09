import React from 'React'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from 'firebase'

export default class Loading extends React.Component {

    componentDidMount() {
        const { navigation } = this.props;
        firebase.auth().onAuthStateChanged(user => {
            console.log('Текущий пользователь ', firebase.auth().currentUser);
            user = null;
            navigation.navigate(user ? 'Welcome' : 'Login');
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})