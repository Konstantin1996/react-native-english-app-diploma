import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    barText: {
        fontSize: 30,
        textAlign: 'center',
        margin: '3%',
        color: 'black'
    },

    mainContainer: {
        flex: 1,
        color: 'black'
    },


    imageContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    questionContainer: {
        flex: 2,
        alignItems: 'center',
    },

    questionText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },

    buttonContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        
    },

    buttonInnerContainer: {
        width: '50%',
    },

});

export default styles