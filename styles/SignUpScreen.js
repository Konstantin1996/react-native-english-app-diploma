import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    button: {
        margin: 10
    },
    header: {
        marginBottom: 40,
    },
    inputText: {
        fontSize: 15,
    }, 
    error: {
        textAlign: 'center',
        color: 'red',
    }

})

export default styles