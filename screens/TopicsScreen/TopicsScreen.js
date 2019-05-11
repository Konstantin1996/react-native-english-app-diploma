import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import gstyles from '../../styles/GlobalStyles'
import styles from '../../styles/TopicsScreen'
import HeaderLogo from './components/HeaderLogo'
class TopicsScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
      headerTitle: () => {
         return (
            <HeaderLogo stars={navigation.getParam('points')} />
         )
      }
   })

   goToTopicDetails = (topic) => {
      this.props.navigation.navigate('TopicDetails', { topic: topic });
   }

   topicIsOpen = ({ pointsNeeded }) => {
      const userPoints = this.navigation.getParam('points');
      return !(userPoints >= pointsNeeded);
   }

   onContentSizeChange = (contentWidth, contentHeight) => {
      this.scrollView.scrollToEnd({ animated: true });
   }

   renderTopics = (isRepeatScreen, topic) => {
      if (isRepeatScreen) {
         return (
            <View style={styles.topicInnerContainerRepeat}>
               <Icon
                  reverse
                  name='graduation-cap'
                  size={30}
                  type="font-awesome"
               />
               <Text style={styles.topicTextRepeat} >{topic.name}</Text>
            </View>
         )
      } else {
         return (
            <View
               style={styles.topicInnerContainerTask}>
               <Text style={styles.topicTextTask}>{topic.name}</Text>
               <Icon
                  reverse
                  type="font-awesome"
                  name='pencil'
                  size={30}
               />
            </View>
         )
      }
   }

   navigation = this.props.navigation;

   render() {
      const { topics } = this.props;

      if (topics) {
         return (
            <View style={styles.mainContainer}>
               <Text style={styles.textTheme}>Выберите тему</Text>
               <ScrollView
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={this.onContentSizeChange}
                  contentContainerStyle={styles.scrollView}>
                  {
                     topics.reverse().map((topic) => {
                        let styleForItem = topic.repeatScreen ? styles.itemRepeat : styles.itemTopic;
                        const isDisabled = this.topicIsOpen(topic);

                        if (isDisabled) {
                           styleForItem = { ...styleForItem, opacity: 0.4 }
                        }

                        return (
                           <TouchableOpacity
                              disabled={isDisabled}
                              key={topic.id}
                              style={styleForItem}
                              topic={topics[topic]}
                              onPress={() => this.goToTopicDetails(topic)}
                           >
                              <View style={styles.topicContainer}>
                                 {this.renderTopics(topic.repeatScreen, topic)}
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