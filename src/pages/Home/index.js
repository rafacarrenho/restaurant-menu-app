import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeProductsList from './components/HomeProductsList';
import HomeDefault from './components/HomeDefault';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeDefault" component={HomeDefault} />
      <Stack.Screen
        name="HomeProductsList"
        component={HomeProductsList}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default Home;
