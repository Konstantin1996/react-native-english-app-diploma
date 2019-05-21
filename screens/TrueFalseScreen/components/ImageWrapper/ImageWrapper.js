import React from 'react'
import { View, Image } from 'react-native'
import style from '../../../../styles/TrueFalseScreen';

const ImageWrapper = ({questions, questionNumber}) => {
    return (
        <View style={style.imageContainer}>
            <Image
                style={style.image}
                source={{ uri: questions[questionNumber].image }}
            />
        </View>
    )
}

export default ImageWrapper
