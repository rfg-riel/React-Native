import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screens/Home';
import ProfileScreen from './Screens/Profile';


const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;