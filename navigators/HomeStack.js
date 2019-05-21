
import { createStackNavigator } from 'react-navigation'
import WelcomeScreen from  '../screens/WelcomeScreen/WelcomeScreen'
import TopicsScreen from '../screens/TopicsScreen/TopicsScreen'
import TopicBottom from '../navigators/TopicsBottom'
import TopicDetailsScreen from '../screens/TopicDetailsScreen/TopicDetailsScreen'
import QuestionsTranslateScreen from '../screens/QuestionsTranslateScreen/QuestionsTranslateScreen'
import CongratsScreen from '../screens/CongratsScreen/CongratsScreen'
import RepeatingScreen from '../screens/RepeatingScreen/RepeatingScreen'
import GuessWordScreen from '../screens/GuessWordScreen/GuessWordScreen.js'
import TrueFalseScreen from '../screens/TrueFalseScreen/TrueFalseScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import GrammarScreen from '../screens/GrammarScreen/GrammarScreen'

const HomeStack = createStackNavigator(
    {
      Loading: LoadingScreen,
      Login: LoginScreen,
      SignUp: SignUpScreen,
      Welcome: WelcomeScreen,
      Topics: TopicsScreen,
      TopicDetails: TopicDetailsScreen,
      QuestionsTranslate: QuestionsTranslateScreen,
      Congrats: CongratsScreen,
      Repeating: RepeatingScreen,
      Grammar: GrammarScreen,
      GuessWord: GuessWordScreen,
      TrueFalseGame: TrueFalseScreen
    },

    {
      initialRouteName: 'Loading',
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