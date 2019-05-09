import React from 'React'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from 'firebase'
import { firebaseConfig } from '../../firebase/config';

export default class Loading extends React.Component {

    componentDidMount() {
        console.log(firebase);
        const { navigation } = this.props;
        
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        console.log('Текущий пользователь ' + firebase.auth().currentUser);
        firebase.auth().onAuthStateChanged(user => {
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