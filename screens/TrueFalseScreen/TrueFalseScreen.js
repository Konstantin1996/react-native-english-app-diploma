import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ProgressBar from './components/ProgressBar/ProgressBar'
import Questions from './components/Questions/Questions'
import ButtonsWrapper from './components/ButtonsWrapper/ButtonsWrapper'
import ImageWrapper from './components/ImageWrapper/ImageWrapper'

import style from '../../styles/TrueFalseScreen'


const initialState = {
    rightAnswers: [],
    questionNumber: 0,
    isPreviousRight: null,
    background: 'white',
}
export default class TrueFalseScreen extends Component {
    state = initialState;

    mixQuestions = () => {
        const allQuestions = this.props.navigation.getParam('topic').allQuestions;
        const randomNumber = Math.floor(Math.random() * allQuestions.length - 1);
        for (let i = 0; i < allQuestions.length - 1; i++) {
            if (i === randomNumber) {
                let timeVar = allQuestions[i];
                allQuestions[i] = allQuestions[i + 1];
                allQuestions[i + 1] = timeVar;
            }
        }
        return allQuestions;
    }

    handleAnswer = (isRight) => {
        const { navigation } = this.props;
        const topic = navigation.getParam('topic');
        const questionList = navigation.getParam('questionList');
        const questionNumberNext = navigation.getParam('questionNumber') + 1;

        if (isRight) {
            if (questionNumberNext < questionList.length) {
                navigation.navigate('TrueFalseGame', { questionList: topic.questionList, questionNumber: questionNumberNext, topic: topic });

                this.setState({...initialState, rightAnswers: [...this.state.rightAnswers]})

                if (this.state.isPreviousRight || this.state.isPreviousRight === null) {
                    this.setState({
                        ...initialState,
                        rightAnswers: [...this.state.rightAnswers, 1],
                        isPreviousRight: true,
                    });
                }
            } else {
                navigation.navigate('Congrats');
            }
        } else {
            this.setState({
                background: 'rgba(244, 26, 26, 0.43)',
                rightAnswers: [...this.state.rightAnswers, 0],
                isPreviousRight: false
            })
        }
    }

    mixedQuestions = this.mixQuestions();

    calculateRightAnswers = () => {
        const calculate = (a, current) => a + current;
        return this.state.rightAnswers.reduce(calculate, 0);
    }

    render() {
        const { navigation } = this.props;
        const questions = navigation.getParam('questionList');
        const questionNumber = navigation.getParam('questionNumber');
        console.log(this.state.rightAnswers)
        return (
            <View style={{...style.mainContainer, backgroundColor: this.state.background }}>
                <ProgressBar
                    rightAnswers={this.calculateRightAnswers()}
                    numberOfQuestions={questions.length} />
                <ImageWrapper
                    questions={questions}
                    questionNumber={questionNumber} />
                <Questions
                    questions={questions}
                    mixedQuestions={this.mixedQuestions}
                    questionNumber={questionNumber} />
                <ButtonsWrapper
                    handleAnswer={this.handleAnswer}
                    questions={questions}
                    mixedQuestions={this.mixedQuestions}
                    questionNumber={questionNumber} />
            </View>
        )
    }
}
