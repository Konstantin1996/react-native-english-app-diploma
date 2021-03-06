import React, { Component } from 'react'
import { Button, View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../styles/WelcomeScreen'
import { fetchTopics } from '../../actions/FetchTopics'

import firebase from 'firebase'

import { getCurrentUser } from '../../actions/fetchUserActions'

class WelcomeScreen extends Component {

  state = {
    topics: null,
  }

  static navigationOptions = {
    title: 'Engleo',
  }

  componentDidMount() {
    fetch(`http://192.168.0.107:4000/topics`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          this.props.fetchData(data);
          return { topics: data }
        })
      })
      .catch(error => console.log(error));

      const user = this.navigation.getParam('user');
      this.props.getCurrentUser(user.uid);
  }

  navigation = this.props.navigation

  render() {
    // const { navigation } = this.props;

    const nick = this.navigation.getParam('nick', 'default');
    const points = this.navigation.getParam('points');

    return (

      <View style={{ flex: 1, alignItems: "center" }}>

        <ImageBackground source={require('../../styles/images/graduate.png')} style={{ position: 'absolute', width: 240, height: 240, top: 10 }} />
        <View style={{ flex: 5, justifyContent: 'flex-end', marginHorizontal: 5 }}>
          <Text style={styles.viewWelcomeText}>Добро пожаловать {nick}!</Text>
          <Text style={styles.viewWelcomeText}>Это приложение поможет вам улучшить знания по английскому языку.</Text>
          <Text style={styles.viewWelcomeText}>Нажмите кнопку начать</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
          <Button title="Начать" onPress={() => this.navigation.navigate('Topics', { points })} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(`store now is look like this ${JSON.stringify(state.basicReducer.data)}`)
  return {
    topics: state.basicReducer.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (data) => dispatch(fetchTopics(data)),
    incrementData: () => dispatch(increment()),
    getCurrentUser: (uid) => dispatch(getCurrentUser(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
