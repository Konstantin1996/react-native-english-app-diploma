import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { RadioList } from './components/RadioList'
import gstyle from '../../styles/GlobalStyles'

import RadioForm from 'react-native-simple-radio-button';

export default class GuessWordScreen extends Component {

    state = {

    }

    toggleButtonCheck = () => {         
        
    } 

    nextQuestion = () => {
        const { navigation } = this.props;
        const topic = navigation.getParam('topic');
        const questionNumber = navigation.getParam('questionNumber');
        console.log(this);
        navigation.navigate(
            topic.screenName,
            { questionNumber: questionNumber + 1, topic: topic }
        )
    }

    render() {
        const { navigation } = this.props;
        const question = navigation.getParam('topic').questionList[0].question;
        const answer = navigation.getParam('topic').questionList[0].answer;

        console.log('render');

        return (
            <View>

                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>Переведите слово</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>{question}</Text>
                </View>

                <RadioList navigation = {navigation} />

                <Button title="Проверить" onPress={this.toggleButtonCheck} />
            </View>
        )
    }
}
