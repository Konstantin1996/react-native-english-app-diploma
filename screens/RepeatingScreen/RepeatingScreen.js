import React, { ReactDOM, Component } from 'react'
import { Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from '../../styles/RepeatingScreen'
import gstyles from '../../styles/GlobalStyles'



export default class RepeatingScreen extends Component {

    state = {
        inputRefs: []
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Обучение'
        }
    }

    inputRefs = []

    setRef = (ref) => {
        this.inputRefs.push(ref);
    }

    navigation = this.props.navigation;

    learnWord = (index) => {

        this.setState({
            inputRefs: [...this.state.inputRefs, index]
        })

        this.inputRefs[index].setNativeProps({
            style: {
                display: 'flex',
                opacity: 1
            }
        })
    }

    navigateToCongrats = () => {
        this.navigation.navigate('Congrats')
    }

    render() {
        const rules = this.navigation.getParam('topic').rules;
        const length = rules.length;

        return (
            <ScrollView>
                <Text style={{ ...gstyles.globalText, margin: 50 }}>Нажми на картинку, когда выучишь слово</Text>
                {rules.map((rule, index) => {

                    return (
                        <View key={index} style={styles.containerItem}>
                            <View style={{ margin: 25 }}>

                                <Text style={gstyles.globalText} >{rule.word}</Text>
                                <TouchableOpacity onPress={() => this.learnWord(index)}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: rule.image }}
                                    />
                                </TouchableOpacity>
                                <View ref={this.setRef} style={styles.icon}>
                                    <Icon
                                        containerStyle={{ marginLeft: 'auto' }}
                                        reverse
                                        name="check"
                                        color="green"
                                        reverseColor="white"
                                    />
                                </View>
                                <Text style={gstyles.globalText}>{rule.translation}</Text>

                            </View>
                        </View>
                    )
                })}

                {length === this.state.inputRefs.length &&
                    <Button title="Далее" onPress={this.navigateToCongrats}></Button>}

            </ScrollView>
        )
    }
}