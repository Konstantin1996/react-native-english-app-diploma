import React from 'react'
import { View, Button, TouchableOpacity } from 'react-native'

// import { Button } from 'react-native-elements';

import style from '../../../../styles/TrueFalseScreen'

const ButtonsWrapper = (props) => {
    const handlePress = (e, title) => {
        const { handleAnswer, questions, mixedQuestions, questionNumber } = props;
        const resultOfTheAnswer = title === "Верно" && questions[questionNumber].question === mixedQuestions[questionNumber] ||
            title === "Неверно" && questions[questionNumber].question !== mixedQuestions[questionNumber];

        if (resultOfTheAnswer) {
            console.log('Верно');
            handleAnswer(true);
        } else {
            console.log('Неверно');
            handleAnswer(false);
        }
    }

    return (
        <View style={style.buttonContainer}>
            <View style={style.buttonInnerContainer}>
                <Button
                    color="#37c41b"
                    type='outline'
                    title="Верно" 
                    onPress={(event) => handlePress(event, 'Верно')} />
            </View>
            <View style={style.buttonInnerContainer}>
                <Button color="#b23215" type='outline' title="Неверно" onPress={(event) => handlePress(event, 'Неверно')} />
            </View>
        </View>
    )
}

export default ButtonsWrapper
