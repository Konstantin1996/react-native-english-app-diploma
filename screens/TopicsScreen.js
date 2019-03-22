import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import gstyles from '../styles/GlobalStyles'
import styles from '../styles/TopicsScreen'

export default class TopicsScreen extends Component {
    state = {
        topics: [
           {'id': 1,'name': 'Перевод предложений','description':'Переводите предложения с русского на английский и наоборот'},
           {'id': 2,'name': 'Запомнить слова','description':'Запоминайте названия слов и практикуйте свои навыки ' },
        ]
    }

    goToTopicDetails = (topic) => {
        this.props.navigation.navigate('TopicDetails', topic);
    }

    render() {
        return (
         <View>
            <Text style={styles.textTheme}>Выберите тему</Text>
            <ScrollView>
               {
                  this.state.topics.map((item, index) => (
                     <TouchableOpacity key = {item.id} style={styles.itemTopic} onPress={this.goToTopicDetails.bind(this,item)}>
                        <Text style={styles.textTheme}>{item.name}</Text>
                     </TouchableOpacity>
                  ))
               }
            </ScrollView>
         </View>
        )
    }
}

