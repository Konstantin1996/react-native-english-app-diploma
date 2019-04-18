import React, { Component } from 'react'
import { CheckBox } from 'react-native-elements'
import { Image } from 'react-native'

export class CheckBoxItem extends Component {

    state = {
        checked: false,
    }

    toogleCheckBox = (e) => {
        this.setState({ checked: !this.state.checked });    
    }

    render() {
        return (
            <CheckBox
                title={this.props.title}
                checkedIcon={
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../../../styles/images/GuessWordScreen/success.png')}
                    />
                }
                uncheckedIcon={<Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../../styles/images/GuessWordScreen/check-box-empty.png')}
                />}

                uncheckedColor='gray'
                checkedColor='red'
                containerStyle={{ backgroundColor: 'gray' }}

                checked={this.state.checked}
                onPress={this.toogleCheckBox}
            />
        )
    }
}
