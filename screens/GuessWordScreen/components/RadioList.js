import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'

export class RadioList extends Component {

    toggleRadio = (value) => {
        console.log(value);
    } 
    
    getRandomQuestions() {
        const { navigation } = this.props;
        let questionList = navigation.getParam('topic').questionList;

        let randomQuestionOne = Math.floor(Math.random() * questionList.length);
        let randomQuestionTwo = Math.floor(Math.random() * questionList.length);
        let randomQuestionThree = Math.floor(Math.random() * questionList.length);

        const radio_props = [
            { label: questionList[randomQuestionOne].answer, value: 0 },
            { label: questionList[randomQuestionTwo].answer, value: 1 },
            { label: questionList[randomQuestionThree].answer, value: 2 },
        ];

        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={false}
                    labelHorizontal={true}
                    formHorizontal={false}
                    onPress={this.toggleRadio}
                />
            </View>
        )
    }

    render() {
        return (
            this.getRandomQuestions() 
        )
    }
}
