import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'


export class RadioList extends Component {

    shouldComponentUpdate() {
        return this.props.updateRadioList;
    }

    toggleRadio = (value) => {
        this.props.updateRadioValue(value)
    }

    getRandomQuestions() {
        const { navigation } = this.props;
        let questionList = navigation.getParam('topic').questionList;
        let rightAnswerId = navigation.getParam('topic').questionList[navigation.getParam('questionNumber')].id;

        let randomNum = Math.floor(Math.random() * questionList.length);
        let nums = [rightAnswerId];

        while (nums.length < 3) {
            randomNum = Math.floor(Math.random() * questionList.length)
            if(!nums.includes(randomNum)){  
                nums.push(randomNum)
            }
        }

        const radio_props = [
            { label: questionList[nums[0]].answer, value: nums[0] },
            { label: questionList[nums[1]].answer, value: nums[1] },
            { label: questionList[nums[2]].answer, value: nums[2] },
        ];

        radio_props.sort(() => Math.random() - 0.5);

        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={false}
                    labelHorizontal={true}
                    formHorizontal={false}
                    onPress={this.toggleRadio}
                />
            </View>
        )
    }

    render() {
        return (
            this.getRandomQuestions()
        )
    }
}
