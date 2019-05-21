import React from 'react'
import { Text } from 'react-native'

import gstyle from '../../../styles/GlobalStyles'

export function Result(props) {
    const answerResult = props.result ? "Year, you right" : "Your answer is incorrect!";
    const color = props.result ? '#8cce4e' : 'red';
    return props.showResult && <Text style={{...gstyle.globalText, color: color}} >{answerResult}</Text>;
}