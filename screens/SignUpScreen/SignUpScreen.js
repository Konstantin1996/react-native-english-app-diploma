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

        

        console.log(firebase.auth().createUserWithEmailAndPassword(email, password));
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => console.log('ti pidor')).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            console.log(errorCode)
            // ...
          });
        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then(() => {
        //     console.log('navigate');
        //     navigation.navigate('Welcome');
        // })
        // .catch((errorMessage) => {
        //     console.log(errorMessage);
        //     this.setState({errorMessage})})
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
