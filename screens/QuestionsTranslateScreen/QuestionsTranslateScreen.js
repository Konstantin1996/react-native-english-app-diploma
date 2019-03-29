import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import FuzzySet from 'fuzzyset'
import gstyle from '../../styles/GlobalStyles'

export default class QuestionsTranslateScreen extends Component {

  state = {
    possibility: 0,
  }

  checkTheAnswer = (answer, e) => {
    let f = FuzzySet([answer]);
    let arr = f.get(e);
    if (arr && e.split('').length > 3) {
      console.log(Math.round(f.get(e)[0][0] * 100));
      this.setState({ possibility: Math.round(f.get(e)[0][0] * 100) })
    }
  }

  render() {
    const { navigation } = this.props;
    const questionNumber = navigation.getParam('questionNumber');
    const questionList = navigation.getParam('questionList');
    const answer = questionList[questionNumber].answer;

    return (
      <View style={gstyle.container}>
        <Text style={gstyle.globalText}> Переведите предложение: </Text>
        <Text style={gstyle.globalText}> {questionList[questionNumber].question} </Text>
        <TextInput multiline={true} style={{ borderBottomWidth: 1, textAlign: 'center', fontSize: 18, width: '90%' }} onChangeText={this.checkTheAnswer.bind(this,answer)}></TextInput>

        {
          (() => {
            if (this.state.possibility > 90) {
              return (
                <View>
                  <Text style={{ color: 'green' }}>Ваш ответ является правильным на {this.state.possibility}%</Text>
                  {
                    (() => {
                      if (questionList[questionNumber + 1]) {
                        return (
                          <View style={{ marginTop: 50 }}>
                            <Button title="Продолжить" onPress={() => this.props.navigation.push('QuestionsTranslate', { questionList: questionList, questionNumber: questionNumber + 1 })} />
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

