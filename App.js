import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ListScreen from './src/screens/ListScreen';
import ImageListScreen from './src/screens/ImageListScreen';
import ImageDetailsScreen from './src/screens/ImageDetailsScreen'
import FlexDemoScreen from './src/screens/FlexDemo'
import CounterScreen from './src/screens/CounterScreenDemo'
import RandomColorDemoScreen from './src/screens/RandomColorDemo'
import SquareScreen from './src/screens/SquareScreen'
import InputFieldDemoScreen from './src/screens/InputFieldDemo'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Login: LoginScreen,
    List: ListScreen,
    ImageList: ImageListScreen,
    ImageDetails: ImageDetailsScreen,
    FlexDemo: FlexDemoScreen,
    CounterDemo: CounterScreen,
    RandomColorScreen: RandomColorDemoScreen,
    SquareDemo: SquareScreen,
    InputField: InputFieldDemoScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My app',
    },
  }
);

export default createAppContainer(navigator);
