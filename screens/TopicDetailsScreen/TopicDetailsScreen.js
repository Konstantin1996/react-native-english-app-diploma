import React, { Component } from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import gstyle from '../../styles/GlobalStyles'
import styles from '../../styles/TopicDetailsScreen';

export default class TopicDetailsSreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('topic').name
    }
  }

  render() {
    // Передаем из TopicsScreen'a топик
    const { navigation } = this.props;
    const topic = navigation.getParam('topic');
    console.log(topic.screenName);
    return (
      <View style={{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ImageBackground source={require('../../styles/images/books.png')} style={{ width: 200, height: 200, position: 'absolute', top: 70 }} />
        <View style={styles.textContainer}>

            <Text style={{...gstyle.globalText, fontWeight: 'bold'}}>Описание</Text>

            <Text style={styles.description}>{topic.description}</Text>

        </View>
        <View style={styles.btnContainer}>
          {/* Хардкод QuestionTranslate добавил поле в data.json*/}
          <Button title="Приступить" onPress={() => this.props.navigation.navigate(topic.screenName,
            { questionList: topic.questionList, questionNumber: 0, topic: topic }
          )} />
          {/* <Button title="Обучение" onPress={() => this.props.navigation.navigate('Repeating',
            { repeatingList: topic.repeatingList, index: 1 }
          )} /> */}
        </View>
      </View>
    )
  }
}

