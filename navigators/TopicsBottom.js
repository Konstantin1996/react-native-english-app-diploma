import { createBottomTabNavigator } from 'react-navigation'
import TopicsScreen from '../screens/TopicsScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

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
