import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: { 
        flex: 1,
        flexDirection: 'row'
    },

    headerText: {
        alignSelf: 'center', fontSize: 21, fontWeight: 'bold'
    },

    headerContainerStars: { 
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignContent:'center', 
        marginRight: 30 
    }

});

export default styles