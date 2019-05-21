import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Video from 'react-native-video';

import gstyle from '../../styles/GlobalStyles'
import styles from '../../styles/GrammarScreen'

export default class GrammarScreen extends Component {

    navigation = this.props.navigation;

    render() {
        const rules = this.navigation.getParam('topic').rules[0];
        console.log(rules);
        console.log(rules.whenToUse)

        return (
            <ScrollView >
                <View style={{ margin: 5 }}>
                    <Text style={{ ...gstyle.globalText, fontWeight: 'bold' }}> Правила </Text>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={styles.definition}>{rules.definition}</Text>
                </View>

                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={styles.text}>Используется в следующих случаях:</Text>

                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        {rules.whenToUse.map(rule => (
                            <React.Fragment>
                                <View>
                                    <Text style={styles.rule}>{'\u2022' + rule.rule}</Text>
                                    <Text style={styles.example}>{rule.example}</Text>
                                </View>
                            </React.Fragment>
                        ))}
                    </View>

                </View>


                <View>

                {/* <Video source={{ uri: "background" }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} /> */}
                </View>

                <Text></Text>
            </ScrollView>
        )
    }
}
