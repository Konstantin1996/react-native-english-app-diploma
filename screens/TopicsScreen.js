import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity,Button } from 'react-native'
import gstyles from '../styles/GlobalStyles'
import styles from '../styles/TopicsScreen'
import { connect } from 'react-redux'

class TopicsScreen extends Component {

   goToTopicDetails = (topic) => {
      this.props.navigation.navigate('TopicDetails', topic);
   }

   render() {
      if (this.props.topics) {
         return (
            <View>
               <Text style={styles.textTheme}>Выберите тему</Text>
               <ScrollView>
                  {
                     this.props.topics.map((topic, index) => (
                        <TouchableOpacity 
                           key={topic.id} 
                           style={styles.itemTopic} 
                           onPress={this.goToTopicDetails.bind(this, topic)}
                        >
                           <Text style={styles.textTheme}>{topic.name}</Text>
                        </TouchableOpacity>
                     ))
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

 export default connect(mapStateToProps,null)(TopicsScreen);