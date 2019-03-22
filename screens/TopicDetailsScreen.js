import React, { Component } from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import gstyle from '../styles/GlobalStyles'
import styles from '../styles/TopicDetailsScreen';
export default class TopicDetailsSreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    }
  }

  render() {
    const { navigation } = this.props;
    console.log(navigation);
    const desc = navigation.getParam('description');
    return (
      <View style={{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ImageBackground source={require('../styles/images/books.png')} style={{ width: 200, height: 200, position: 'absolute', top: 70 }} />
        <View style={styles.textContainer}>
          <Text style={gstyle.globalText}>{desc}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title="Поехали!" onPress={() => this.props.navigation.navigate('QuestionsTranslate', 
          { 
            taskNumber: 0,
            topicNumber: 1,
          }
          )} />
        </View>
      </View>
    )
  }
}

