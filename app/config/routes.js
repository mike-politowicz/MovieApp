import { createStackNavigator } from 'react-navigation';
import { navigationHeaderStyle } from './styles';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Movies'
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        headerTitle: 'Details'
      }
    }
  },
  {
    navigationOptions: navigationHeaderStyle
  }
);

export default HomeStack;
