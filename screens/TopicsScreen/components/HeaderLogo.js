import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from '../../../styles/HeaderLogo'

const HeaderLogo = ({ points }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Темы</Text>
            <View style={styles.headerContainerStars}>
                <Text style={{ fontSize: 30, alignSelf:'center', marginRight: 20 }}>{points}</Text>
                <Icon size={40} name="star" color="yellow"/>
            </View>
        </View>
    )
}

export default HeaderLogo
