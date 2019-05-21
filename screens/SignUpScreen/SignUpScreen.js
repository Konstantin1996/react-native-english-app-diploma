import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import firebase from '../../firebase/config'
import styles from '../../styles/SignUpScreen'
import gstyles from '../../styles/GlobalStyles'
export default class SignUpScreen extends Component {

    state = {
        email: '',
        password: '',
        repeatPassword: '',
        nick: '',
        errorMessage: null
    }

    emailInput = (email) => {
        this.setState({ email });
    }

    passwordInput = (password) => {
        this.setState({ password });
    }

    passwordRepeatInput = (password) => {
        this.setState({ repeatPassword: password });
    }

    nickInput = (nick) => {
        this.setState({ nick })
    }

    handleSignUp = () => {
        const { navigation } = this.props;
        const { email, password } = this.state;
        if (this.state.password === this.state.repeatPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(({ user: { uid, email } }) => {
                    var newUser = {
                        id: uid,
                        email: email,
                        nick: this.state.nick,
                        progress: 0,
                        points: 0
                    }
                    console.log('try to insert');
                    return firebase.database().ref('users/' + uid).set(newUser);
                }).then(() => {
                    console.log('navigate to Login...');
                    // debugger;
                    navigation.navigate('Login', { user: newUser });
                })
                .catch(({ message }) => {
                    console.log(message);
                    this.setState({ errorMessage: message })
                })
        } else {
            this.setState({ errorMessage: 'Passwords does not match'})
        }
    }

    navigateLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Login');
    }

    render() {
        const { email, password, nick, errorMessage, repeatPassword } = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ ...gstyles.globalText, ...styles.header }}>Регистрация</Text>

                    {errorMessage && (<Text style={styles.error}>{errorMessage}</Text>)}

                    <TextInput
                        style={styles.inputText}
                        placeholder="Имя"
                        autoCapitalize="none"
                        onChangeText={this.nickInput}
                        value={nick}
                    />

                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={this.emailInput}
                        value={email}
                    />

                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Пароль"
                        autoCapitalize="none"
                        onChangeText={this.passwordInput}
                        value={password}
                    />

                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Повтор пароля"
                        autoCapitalize="none"
                        onChangeText={this.passwordRepeatInput}
                        value={repeatPassword}
                    />

                    <View style={styles.button}>
                        <Button style={styles.button} title="Зарегистрироваться" onPress={this.handleSignUp}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button style={styles.button} title="У вас уже есть аккаунт? Логин" onPress={this.navigateLogin}></Button>
                    </View>
                </View>
            </View>
        )
    }
}
