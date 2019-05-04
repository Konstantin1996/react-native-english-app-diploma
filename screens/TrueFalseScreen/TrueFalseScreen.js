import React, { Component } from 'react'
import { Text, View, Image, Button } from 'react-native'

import Questions from './Questions'
import ButtonsWrapper from './ButtonsWrapper'

export default class TrueFalseScreen extends Component {

    state = {
        questionNumber: 0,
    }

    render() {
        const { navigation } = this.props;
        const topic = navigation.getParam('topic');
        const questions = navigation.getParam('questionList');

        return (
            <View>
                <View style={{ width: 400, height: 400}}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: questions[this.state.questionNumber].image }}
                    />
                </View>
                
                <Questions questions={questions} questionNumber={this.state.questionNumber}></Questions>

                <ButtonsWrapper {...this.props}></ButtonsWrapper>
            </View>
        )
    }
}
