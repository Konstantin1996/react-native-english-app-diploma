import { createBottomTabNavigator } from 'react-navigation'
import TopicsScreen from '../screens/TopicsScreen/TopicsScreen'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'

const bottomNavigation = createBottomTabNavigator(
    {
        Topics: TopicsScreen,
    },

    {
        navigationOptions: {
            title: 'Темы'
        }
    }
)

export default bottomNavigation
