import React from 'react'
import { View, Text } from 'react-native'

const Questions = ({questions, questionNumber}) => {
    return (
        <View>
            <Text>{questions[questionNumber].answer}</Text>
            <Text>{questions[questionNumber].question}</Text>
        </View>
    )
}

export default Questions
