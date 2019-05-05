import React from 'react'
import { View, Text } from 'react-native'

import style from '../../../../styles/TrueFalseScreen'

const Questions = ({questions, mixedQuestions, questionNumber}) => {
    return (
        <View style={style.questionContainer}>
            <Text style={style.questionText}>{questions[questionNumber].answer}</Text>
            <Text style={style.questionText}>{mixedQuestions[questionNumber]}</Text>
        </View>
    )
}

export default Questions
