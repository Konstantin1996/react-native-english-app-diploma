import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import firebase from 'firebase'




export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    componentWillMount() {

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const testObject = {
            name: 'Penguin',
            age: 20,
            sex: 'm',
            weight: 69
        }

        firebase.database().ref('users/').set(testObject).then(() => {
            console.log('INSERTED!');
        }).catch(() => {
            console.log('ERROR');
        })

        const newUserKey = firebase.database().ref().child('users').push().key;
        const usersRef = firebase.database().ref('users');
        console.log('usersRef');
        console.log(usersRef);
        console.log(`new user key ${newUserKey}`)

        // firebase.database().ref('users/' + newUserKey).set({ name: 'Bob', age: 9 })
        //     .then(() => { console.log('INSERTED BOB HEY') })
        //     .catch((err) => {
        //         console.log(err);
        //     })


        // let id = '001';
        // firebase.database().ref('users/'+id).once('value', function (snapshot) {
        //     const userName = (snapshot.val() && snapshot.val().name) || 'Anonymous'
        //     console.log('GET some data');
        //     console.log(userName);
        //     console.log(snapshot.val())
        // });
    }


    emailInput = (email) => {
        this.setState({email});
    }
 
    passwordInput = (password) => {
        this.setState({password});
    }

    navigateRegistration = () => {
        const { navigation } = this.props;
        navigation.navigate('SignUp');
    }

    render() {
        const { email, password, errorMessage } = this.state;

        return (
            <View>
                <Text>Логин</Text>

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={this.emailInput}
                    value={email}
                />

                <TextInput 
                    secureTextEntry
                    placeholder="Пароль"
                    autoCapitalize="none"
                    onChangeText={this.passwordInput}
                    value={password}
                />

                <Button title="Войти"/>
                <Button title="Зарегистрироваться" onPress={this.navigateRegistration} />
            </View>
        )
    }
}
