import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../../styles/TopicDetailsScreen';

export default class RepeatingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Обучение'
        }
    }

    render() {
        const {navigation} = this.props;
        const index = navigation.getParam('index');
        const repeatingItem = navigation.getParam('repeatingList')[index];

        return (
            <View>
                <Text>{repeatingItem.rules}</Text>
                <View>
                    <Button title="Далее" onPress={() => this.props.navigation.navigate('Repeating')} />
                </View>
            </View>
        )
    }
}
