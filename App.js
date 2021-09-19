import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home';
import AddReview from './components/AddReview';
import ViewPost from './components/ViewPost';
import Wishlist from './components/Wishlist';
import SingleScreen from './components/Single';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Post" component={ViewPost} options={{ title: 'Posts' }} /> */}
        {/* <Stack.Screen name="Review" component={AddReview} options={{ title: 'Add Review' }} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Reviews' }} /> */}
        {/* <Stack.Screen name="Wishlist" component={Wishlist} options={{ title: 'Wishlist' }} /> */}
        <Stack.Screen name="Single" component={SingleScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
