import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    image: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain' 
    },

    icon: {
        display: 'none', 
        opacity: 0
    },

    text: {
        textAlign: 'center'
    }
})

export default styles