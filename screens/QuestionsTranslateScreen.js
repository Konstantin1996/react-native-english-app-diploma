import React, { Component } from 'react'
import { Text, View, TextInput, Button, ScrollView } from 'react-native'
import FuzzySet from 'fuzzyset'
import gstyle from '../styles/GlobalStyles'

export default class QuestionsTranslateScreen extends Component {

  state = {
    possibility: 0,
    questionList: ['We hope to meet your friends again', 'There is a cat in this house'],
    rightAnswers: ['Мы надеемся встретить твоих друзей снова', 'В этом доме есть кот']
  }


  checkTheAnswer = (e) => {
    let f = FuzzySet(this.state.rightAnswers);
    let arr = f.get(e);
    if (arr && e.split('').length > 5) {
      console.log(Math.round(f.get(e)[0][0] * 100));
      this.setState({ possibility: Math.round(f.get(e)[0][0] * 100) })
    }
  }

  render() {
    const { navigation } = this.props;
    const topic = navigation.getParam('topic')
    const questionNumber = navigation.getParam('taskNumber');
    console.log(navigation);
    return (
      <View style={gstyle.container}>
        <Text style={gstyle.globalText}> Переведите предложение: </Text>
        <Text style={gstyle.globalText}> {this.state.questionList[questionNumber]} </Text>
        <TextInput multiline={true} style={{ borderBottomWidth: 1, textAlign: 'center', fontSize: 18, width: '90%' }} onChangeText={this.checkTheAnswer}></TextInput>

        {
          (() => {
            if (this.state.possibility > 90) {
              return (
                <View>
                  <Text style={{ color: 'green' }}>Ваш ответ является правильным на {this.state.possibility}%</Text>
                  {
                    (() => {
                      if (this.state.questionList[questionNumber + 1]) {
                        return (
                          <View style={{ marginTop: 50 }}>
                            <Button title="Продолжить" onPress={() => this.props.navigation.push('QuestionsTranslate', { taskNumber: questionNumber + 1 })} />
                          </View>
                        )
                      }
                      else {
                        return <Button title="Закончить тест" onPress={() => this.props.navigation.push('Congrats')} />
                      }
                    }
                    )()
                  }
                </View>
              )
            } else {
              return (<Text style={{ color: 'red' }}>Ваш ответ является правильным на {this.state.possibility}%</Text>)
            }
          })()
        }

      </View>
    )
  }
}

