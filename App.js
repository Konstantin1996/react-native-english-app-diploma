import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import HomeStack from './navigators/HomeStack'

import store from './store/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

const AppContainer = createAppContainer(HomeStack)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
