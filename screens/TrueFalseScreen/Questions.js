import React from 'react'
import { View, Text } from 'react-native'

import gstyles from '../../styles/GlobalStyles'

const Questions = ({questions, mixedQuestions, questionNumber}) => {
    return (
        <View style={gstyles.container}>
            <Text style={gstyles.globalText}>{questions[questionNumber].answer}</Text>
            <Text style={gstyles.globalText}>{mixedQuestions[questionNumber]}</Text>
        </View>
    )
}

export default Questions
