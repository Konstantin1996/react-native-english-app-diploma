import React, { Component } from 'react'
import { Text, View } from 'react-native'

export function Result(props) {
    const rightAnswer = "Yeah, you right!";
    const wrongAnswer = "Your answer is incorrect!";
    if(props.showResult){
        return props.result ? (<Text>{rightAnswer}</Text>) : (<Text>{wrongAnswer}</Text>)
    } else {
        return null;
    }
}