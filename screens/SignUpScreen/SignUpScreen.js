import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import firebase from 'firebase'
import { firebaseConfig } from '../../firebase/config';


export default class SignUpScreen extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    emailInput = (email) => {
        this.setState({email});
    }
 
    passwordInput = (password) => {
        this.setState({password});
    }

    handleSignUp = () => {
        const {navigation} = this.props;
        const {email, password} = this.state;
        console.log('HERE');    

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('navigate to Login...');
            navigation.navigate('Login');
        })
        .catch(({message}) => {
            this.setState({errorMessage: message})
        })
    }

    navigateLogin = () => {
        const {navigation} = this.props;
        navigation.navigate('Login');
    }

    render() {
        const {email, password, errorMessage} = this.state;

        return (
            <View>
                
                <Text>Регистрация</Text>
                
                {errorMessage && (<Text>{errorMessage}</Text>)}

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
