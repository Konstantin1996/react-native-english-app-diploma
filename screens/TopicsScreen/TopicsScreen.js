import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import gstyles from '../../styles/GlobalStyles'
import styles from '../../styles/TopicsScreen'
import { connect } from 'react-redux'


class TopicsScreen extends Component {

   static navigationOptions = {
      title: 'Темы'
   }

   goToTopicDetails = (topic) => {
      this.props.navigation.navigate('TopicDetails', { topic: topic });
   }

   topicIsOpen = ({ pointsNeeded }) => {
      const userPoints = this.navigation.getParam('points');
      return !(userPoints >= pointsNeeded);
   }

   navigation = this.props.navigation;

   render() {
      const { topics } = this.props;
      const points = this.navigation.getParam('points');

      if (topics) {
         return (
            <View>
               <Text style={styles.textTheme}>Выберите тему</Text>
               <Text style={styles.textTheme}> Количество очков {points}</Text>
               <ScrollView contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 10 }}>
                  {
                     topics.reverse().map((topic) => {
                        const styleForItem = topic.repeatScreen ? styles.itemRepeat : styles.itemTopic;
                        return (
                           <TouchableOpacity
                              disabled={this.topicIsOpen(topic)}
                              key={topic.id}
                              style={styleForItem}
                              topic={topics[topic]}
                              onPress={() => this.goToTopicDetails(topic)}
                           >
                              <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                 <Icon
                                    name='star'
                                    color='yellow'
                                 />
                                 <Text style={styles.textTheme}>{topic.name}</Text>
                              </View>
                           </TouchableOpacity>
                        )
                     })
                  }
               </ScrollView>
            </View>
         )
      } else {
         return (
            <View>
               <Text style={styles.textTheme}>Загрузка...</Text>
            </View>
         )
      }
   }
}

const mapStateToProps = (state) => {
   return {
      topics: state.basicReducer.data
   }
};

export default connect(mapStateToProps, null)(TopicsScreen);