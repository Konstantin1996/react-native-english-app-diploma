import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import gstyles from '../styles/GlobalStyles'
import styles from '../styles/TopicsScreen'

export default class TopicsScreen extends Component {

   state = {
      topics: null,
   }

   componentDidMount() {
      fetch(`http://192.168.0.153:4000/topics`)
         .then(response => response.json())
         .then(data => {
            this.setState({ topics: data })
         })
         .catch(error => console.log(error));
   }

   goToTopicDetails = (topic) => {
      this.props.navigation.navigate('TopicDetails', topic);
   }

   render() {
      if (this.state.topics) {
         console.log(`TOPICI BLYA ${this.state.topics}`);
         return (
            <View>
               <Text style={styles.textTheme}>Выберите тему</Text>
               <ScrollView>
                  {
                     this.state.topics.map((item, index) => (
                        <TouchableOpacity 
                           key={item.id} 
                           style={styles.itemTopic} 
                           onPress={this.goToTopicDetails.bind(this, item)}
                        >
                           <Text style={styles.textTheme}>{item.name}</Text>
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

