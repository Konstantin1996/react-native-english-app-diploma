import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import style from '../../../../styles/TrueFalseScreen';

const ProgressBar = ({rightAnswers, numberOfQuestions}) => {
  return (
    <View >
      <Text style={style.barText}>{rightAnswers}/{numberOfQuestions}</Text>
    </View>
  )
}

ProgressBar.propTypes = {
    rightAnswers: PropTypes.number,
    numberOfQuestions: PropTypes.number
}

export default ProgressBar
