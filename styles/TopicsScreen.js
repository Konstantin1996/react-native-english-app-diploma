import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textTheme: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },

    mainContainer: {
        flex: 1,
    },

    topicContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    scrollView: {
        paddingVertical: 50,
        paddingHorizontal: 10 
    },

    topicInnerContainerRepeat: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    topicInnerContainerTask: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    topicTextRepeat: {
        fontSize: 18,
        marginLeft: 'auto'
    },

    topicTextTask: {
        fontSize: 18,
        marginRight: 'auto'
    },

    itemTopic: {
        padding: 30,
        textAlign: 'center',
        margin: 10,
        marginRight: 50,
        backgroundColor: '#f7e97b',
        borderRadius: 0,
        height: 90,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        borderTopRightRadius: 50
    },

    itemRepeat: {
        padding: 30,
        margin: 10,
        justifyContent: 'center',
        marginLeft: 50,
        height: 90,
        backgroundColor: '#75ffb7',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50
    }
})

export default styles