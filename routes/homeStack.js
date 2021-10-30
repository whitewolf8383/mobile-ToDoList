import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-nvigation';
import Home from '../screens/home';
import TaskScreen from '../screens/taskScreen';

const screens = {
  Home: {
    screen: Home
  },
  Tasks: {
    screen: TaskScreen
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);