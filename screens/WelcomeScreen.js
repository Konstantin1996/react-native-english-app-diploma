import React, { Component } from 'react'
import { Button, View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { clickButton } from '../actions/index'
import styles from '../styles/WelcomeScreen'
import FuzzySet from 'fuzzyset'

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  static navigationOptions = {
    title: 'Engleo',
  }

  render() {
    f = FuzzySet(['what']);
    console.log(f.get('wha')[0][0]);
    // console.log(f.get('big'));
    console.log(f.get('эт кошка черная'))
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


        {/* <Button title="test REDUX" onPress={() => {
          console.log('button...');
          console.log(this.props);
          this.props.clickButton('HELLO from REDUX');
        }} /> */}
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
          <Button title="Начать"  onPress={() => this.props.navigation.navigate('Topics')}/>
          {/* <Button title="Начать"  onPress={() => this.props.navigation.navigate('Congrats')}/> */}
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clickButton: (params) => {
    console.log('CLICKED');
    dispatch(clickButton(params));
  }
})

export default connect(null, mapDispatchToProps)(WelcomeScreen)