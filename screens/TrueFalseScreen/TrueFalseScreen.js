import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'

import Questions from './Questions'
import ButtonsWrapper from './ButtonsWrapper'



export default class TrueFalseScreen extends Component {

    state = {
        questionNumber: 0,
        background: 'white',
        score: 0,
    }

    mixQuestions = () => {
        const allQuestions = this.props.navigation.getParam('topic').allQuestions;
        for (let i = 0; i < allQuestions.length - 1; i++) {
            if (i % 2 === 0) {
                let timeVar = allQuestions[i];
                allQuestions[i] = allQuestions[i+1];
                allQuestions[i+1] = timeVar;
            }
        }
        return allQuestions;
    }

    handleAnswer = (isRight) => {
        if(isRight){
            this.setState({
                background: '#30ff60',
                score: this.state.score + 10
            })
        } else {
            this.setState({ 
                background: 'red',
                score: this.state.score
            })
        }
    }

    render() {
        const { navigation } = this.props;
        const questions = navigation.getParam('questionList');
        const mixedQuestions = this.mixQuestions();

        return (
            <View style={{ backgroundColor: this.state.background}}>
                <View style={{ height: 300 }}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: questions[this.state.questionNumber].image }}
                    />
                </View>

                <Questions questions={questions} mixedQuestions={mixedQuestions} questionNumber={this.state.questionNumber}></Questions>

                <ButtonsWrapper handleAnswer={this.handleAnswer} questions={questions} mixedQuestions={mixedQuestions} questionNumber={this.state.questionNumber}></ButtonsWrapper>
            </View>
        )
    }
}
