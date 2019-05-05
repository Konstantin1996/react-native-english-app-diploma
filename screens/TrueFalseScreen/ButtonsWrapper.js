import React from 'react'
import { View, Button } from 'react-native'



const ButtonsWrapper = (props) => {

    const handlePress = (e, title) => {
        const { handleAnswer, questions, mixedQuestions, questionNumber } = props;
        const resultOfTheAnswer = title === 'Верно' && questions[questionNumber] === mixedQuestions[questionNumber] || 
                                  title === 'Неверно' && questions[questionNumber] !== mixedQuestions[questionNumber];
    
        if(resultOfTheAnswer) {
            console.log('Верно');
            handleAnswer(true);
        } else {
            console.log('Неверно');
            handleAnswer(false);
        }
    }

    return (
        <View>
            <Button title="Верно" onPress={(event) => handlePress(event, 'Верно')} />
            <Button title="Неверно" onPress={(event) => handlePress(event, 'Неверно')} />
        </View>
    )
}

export default ButtonsWrapper
