import React, { Component } from 'react'
import { Text, View } from 'react-native'
import gstyle from '../../styles/GlobalStyles'

import { CheckBox } from 'react-native-elements'
import { Image } from 'react-native'



export default class GuessWordScreen extends Component {

    state = {
        checked: false,
        wrong: true
    }

    render() {
        const { navigation } = this.props;
        const question = navigation.getParam('topic').questionList[0].question;
        const answer = navigation.getParam('topic').questionList[0].answer;
        let answerResult = this.state.checked;
        // let bg = answerResult ? { backgroundColor: 'rgb(55, 183, 67)' } : { backgroundColor: 'red' }
        return (
            <View>
                
                <View style={{margin: 10}}>
                    <Text style={gstyle.globalText}>Переведите слово</Text>
                </View>

                <View style={{margin: 10}}>
                    <Text style={gstyle.globalText}>{question}</Text>
                </View>

                <View style={{margin: 10}}>
                    <Text style={gstyle.globalText}></Text>
                </View>

                <CheckBox
                    title={answer}
                    checkedIcon={
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../styles/images/GuessWordScreen/success.png')}
                        />
                    }
                    uncheckedIcon={<Image
                        style={{ width: 30, height: 30 }}
                        source={require('../../styles/images/GuessWordScreen/check-box-empty.png')}
                    />}
                    
                    uncheckedColor='gray'
                    checkedColor='red'
                    containerStyle={{backgroundColor: 'gray'}}
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                />

            </View>
        )
    }
}
