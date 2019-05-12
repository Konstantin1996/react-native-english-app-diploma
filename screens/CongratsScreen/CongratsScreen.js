import React, { Component } from 'react'
import { Text, View, Button, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

import styles from '../../styles/GlobalStyles'
import firebase from '../../firebase/config'
import { updatePoints } from '../../actions/fetchUserActions'

class CongratsScreen extends Component {

    state = {
        points: null
    }

    componentDidMount() {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + uid).once('value', (snapshot) => {
            console.log(snapshot.val().points)
            const points = snapshot.val().points;

            this.setState({ points: points + 100 });

            return firebase.database().ref('users/' + uid).update({ points: points + 100 })
        })
            .then(() => { console.log('Обновили очки') })
            .catch(err => console.log(err));
    }

    navigateToScreen = (screen) => {
        console.log('navigateTOscreeeen', this.state.points);
        this.props.updatePoints(this.state.points);
        this.props.navigation.navigate('Topics', { points: this.state.points })
    }

    render() {
        console.log('congrats  ', this.state.points);
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ImageBackground source={require('../../styles/images/congrats.png')} style={{ position: 'absolute', width: 240, height: 240, top: 50 }} />
                <View style={{ marginTop: 300 }}>
                    <Text style={styles.globalText}> Поздравляем вы прошли все задания по переводу! </Text>
                </View>
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Button title="Понятно" onPress={this.navigateToScreen} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.basicReducer.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updatePoints: (points) => dispatch(updatePoints(points))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CongratsScreen);


