import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { RadioList } from './components/RadioList'
import gstyle from '../../styles/GlobalStyles'
import { Result } from './components/Result'
export default class GuessWordScreen extends Component {

    state = {
        radioValue: null,
        updateRadioList: false,
        answer: null,
        showResult: false,
        result: null,
        showBtnChecker: true,
        showBtnNext: true
    }

    componentDidMount() {
        this.setState({
            answer: this.props.navigation.getParam('topic').questionList[this.props.navigation.getParam('questionNumber')].answer,
        })
    }

    toggleButtonCheck = () => {
        if (this.state.answer === this.props.navigation.getParam('questionList')[this.state.radioValue].answer) {
            this.setState({
                showResult: true,
                result: true
            })
            debugger;
        } else {
            this.setState({
                showResult: true,
                result: false
            })
            debugger;
        }
        this.setState(() => {
            return {
                updateRadioList: true,
                showBtnChecker: false,
                showBtnNext: true
            }
        });
    }

    updateRadioValue = (value) => {
        console.log(this.state.answer);
        console.log(value);
        debugger
        this.setState({ radioValue: value })
    }

    nextQuestion = () => {
        const { navigation } = this.props;
        const topic = navigation.getParam('topic');
        console.log(navigation.getParam('questionNumber'));
        const questionNumber = navigation.getParam('questionNumber') + 1;
        const questionAnswer = navigation.getParam('questionList')[questionNumber].answer;
        debugger;
        this.setState({
            radioValue: null,
            answer: questionAnswer,
            updateRadioList: false,
            showResult: false,
            result: null,
            showBtnChecker: true,
            showBtnNext: false
        })
        navigation.navigate(
            topic.screenName,
            { questionNumber: questionNumber, topic: topic }
        )
        debugger;
    }

    render() {
        const { navigation } = this.props;
        const questionNumber = navigation.getParam('questionNumber');
        const question = navigation.getParam('topic').questionList[questionNumber].question;
        const answer = navigation.getParam('topic').questionList[questionNumber].answer;

        return (
            <View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>Переведите слово</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={gstyle.globalText}>{question}</Text>
                </View>

                <Result showResult={this.state.showResult} result={this.state.result} />

                <RadioList
                    updateRadioList={this.state.updateRadioList}
                    updateRadioValue={this.updateRadioValue}
                    navigation={navigation}
                    rightAnswer={answer}
                />

                {/* {this.state.showBtnChecker ? ( */}
                    {/* <Button
                        title="Проверить"
                        onPress={this.toggleButtonCheck}
                        disabled={this.state.radioValue !== null ? false : true}
                    />) : null} */}
                {/* {this.state.showBtnNext ? ( */}
                    <Button
                        title='Следующий вопрос'
                        onPress={this.nextQuestion}
                    />
                    {/* ) : null} */}
            </View>
        )
    }
}
