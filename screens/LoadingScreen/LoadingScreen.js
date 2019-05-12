import React from 'React'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import firebase from '../../firebase/config'

export default class Loading extends React.Component {

    componentDidMount() {
        const { navigation } = this.props;
        firebase.auth().onAuthStateChanged(user => {
            console.log('user', user);
            
            if (user) {
                console.log('Текущий пользователь ', user);
                console.log('uid', user.uid);
                
                firebase.database().ref('users/'+user.uid).once('value').then(snapshot => {
                    console.log('snapshot',snapshot)
                    console.log('value',snapshot.val());
                    const nick = snapshot.val().nick;
                    const progress = snapshot.val().progress;
                    const points = snapshot.val().points;
                    navigation.navigate('Welcome', { nick, progress, points, user} );

                    // Логика должна быть такая
                    // if(snapshot.val().progress === 0) {
                        // navigation.navigate('Welcome');
                    // } else {
                        // navigation.navigate('Topics')
                    // }
                }).catch(error => console.log('error',error));
            } else {
                navigation.navigate('Login');
            }
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