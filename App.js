import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Contact from './src/pages/Contact';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ServiceHours from './src/pages/ServiceHours';
import About from './src/pages/About';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" size={18} color="#999" />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: () => <Icon name="envelope" size={18} color="#999" />,
          }}
        />
        <Tab.Screen
          name="ServiceHours"
          component={ServiceHours}
          options={{
            tabBarIcon: () => <Icon name="clock" size={18} color="#999" />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => (
              <Icon name="info-circle" size={18} color="#999" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
