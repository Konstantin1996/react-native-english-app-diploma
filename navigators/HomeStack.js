
import { createStackNavigator } from 'react-navigation'
import WelcomeScreen from  '../screens/WelcomeScreen'
import TopicsScreen from '../screens/TopicsScreen'
import TopicBottom from '../navigators/TopicsBottom'
import TopicDetailsScreen from '../screens/TopicDetailsScreen'
import QuestionsTranslateScreen from '../screens/QuestionsTranslateScreen'
import CongratsScreen from '../screens/CongratsScreen'
import RepeatingScreen from '../screens/RepeatingScreen'


const HomeStack = createStackNavigator(
    {
      Welcome: WelcomeScreen,
      Topics: TopicsScreen,
      TopicDetails: TopicDetailsScreen,
      QuestionsTranslate: QuestionsTranslateScreen,
      Congrats: CongratsScreen,
      Repeating: RepeatingScreen
    },

    {
      initialRouteName: 'Welcome',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#54afbb',
        },
        headerTintColor: '#505353',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  )



  export default HomeStack;