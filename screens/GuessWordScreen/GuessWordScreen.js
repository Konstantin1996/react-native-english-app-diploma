import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CheckBoxItem } from './components/CheckBoxItem'
import gstyle from '../../styles/GlobalStyles'

import { ButtonGroup } from 'react-native-elements'
export default class GuessWordScreen extends Component {

    state = {
        clearAll: false
    }

    getRandomQuestions() {
        const { navigation } = this.props;
        const questionList = navigation.getParam('topic').questionList;
        return questionList.map(element => {
            return <CheckBoxItem clearAll={this.clearAll} title={element.answer} />
        })
    }

    clearAll = () => {
        console.log('EHUUU');
        this.setState({clearAll: true})
    }

    render() {
        const buttons = ['Hello', 'World', 'Buttons']
        const { navigation } = this.props;
        const question = navigation.getParam('topic').questionList[0].question;
        const answer = navigation.getParam('topic').questionList[0].answer;
        return (
            <View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>Переведите слово</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>{question}</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}></Text>
                </View>

                {this.getRandomQuestions()}
            </View>
        )
    }
}
