import React from 'react'
import { Text } from 'react-native'

export function Result(props) {
    const answerResult = props.result ? "Year, you right" : "Your answer is incorrect!";
    return props.showResult ? <Text>{answerResult}</Text> : null;
}