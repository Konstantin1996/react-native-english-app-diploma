import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import firebase from '../../firebase/config'
import styles from '../../styles/SignUpScreen'
import gstyles from '../../styles/GlobalStyles'
export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    emailInput = (email) => {
        this.setState({ email });
    }

    passwordInput = (password) => {
        this.setState({ password });
    }

    navigateToScreen = (screen) => {
        const { navigation } = this.props;
        const { email, password } = this.state;

        if (screen === 'Welcome') {
            const result = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((response) => {
                    console.log('RESPONSE INFO LOGIN SCREEN ... ')
                    console.log(response.user.uid);
                    navigation.navigate(screen, { user: navigation.getParam('user') })
                })
                .catch((errorMessage => this.setState({ errorMessage: errorMessage.message })))
            console.log('Sign In');
            console.log(result);
        } else {
            navigation.navigate(screen);
        }
    }

    render() {
        const { email, password, errorMessage } = this.state;

        return (
            <View style={styles.container}>
                <View>
                        <Text style={{ ...gstyles.globalText, ...styles.header }} >Авторизация</Text>

                        {errorMessage && (<Text style={styles.error}>{errorMessage}</Text>)}
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
                    <View style={styles.button}>
                        <Button title="Войти" onPress={() => { this.navigateToScreen('Welcome') }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Зарегистрироваться" onPress={() => this.navigateToScreen('SignUp')} />
                    </View>
                </View>
            </View>
        )
    }
}
