import React, { Component } from 'react'
import { Button, View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles/WelcomeScreen'
import { fetchTopics } from '../actions/FetchTopics'

class WelcomeScreen extends Component {

  state = {
    topics: null,
  }

  static navigationOptions = {
    title: 'Engleo',
  }

  componentDidMount() {
    fetch(`http://192.168.0.153:4000/topics`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          this.props.fetchData(data);
          return { topics: data }
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center" }}>

        <ImageBackground source={require('../styles/images/graduate.png')} style={{ position: 'absolute', width: 240, height: 240, top: 10 }} />
        <View style={{ flex: 5, justifyContent: 'flex-end' }}>
          <Text style={styles.viewWelcomeText}> Добро пожаловать, в приложение, которое поможет вам улучшить знания по английскому языку.</Text>
          <Text style={styles.viewWelcomeText}> Нажмите кнопку начать</Text>
        </View>

        {/* <TextInput onChangeText={(text) => this.setState({ text: text })} /> */}
        {/* <Button title="Go to details" onPress={() =>
          this.props.navigation.navigate('Details', { itemId: 10, otherParams: this.state.text })
        } /> */}

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
          <Button title="Начать" onPress={() => this.props.navigation.navigate('Topics')} />
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
     incrementData: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
