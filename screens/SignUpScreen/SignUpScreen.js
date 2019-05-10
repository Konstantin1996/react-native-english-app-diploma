import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import firebase from '../../firebase/config'
export default class SignUpScreen extends Component {

    state = {
        email: '',
        password: '',
        nick: '',
        errorMessage: null
    }

    emailInput = (email) => {
        this.setState({ email });
    }

    passwordInput = (password) => {
        this.setState({ password });
    }

    nickInput = (nick) => {
        this.setState({ nick })
    }

    handleSignUp = () => {
        const { navigation } = this.props;
        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user: { uid, email } }) => {
                let newUser = {
                    id: uid,
                    email: email,
                    nick: this.state.nick,
                    progress: 0,
                }
                console.log('try to insert');
                return firebase.database().ref('users/' + uid).set(newUser);
            }).then(() => {
                console.log('navigate to Login...');
                navigation.navigate('Login');
            })
            .catch(({ message }) => {
                console.log(message);
                this.setState({ errorMessage: message })
            })
    }

    navigateLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Login');
    }

    render() {
        const { email, password, nick, errorMessage } = this.state;

        return (
            <View>

                <Text>Регистрация</Text>

                {errorMessage && (<Text>{errorMessage}</Text>)}

                <TextInput
                    placeholder="Имя"
                    autoCapitalize="none"
                    onChangeText={this.nickInput}
                    value={nick}
                />

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

                <Button title="Зарегистрироваться" onPress={this.handleSignUp}></Button>
                <Button title="У вас уже есть аккаунт? Логин" onPress={this.navigateLogin}></Button>
            </View>
        )
    }
}
