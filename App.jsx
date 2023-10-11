import React, {useState} from 'react';
import HomeScreen from './Components/pages/home/home';
import Profile from './Components/pages/profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useFonts from './assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Confidence from './Components/Confidence/conf';
import Oferta from './Components/Oferta/oferta';
import SalatScreen from './Components/pages/Salads/salads';

const Stack = createNativeStackNavigator();

const App = () => {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts()                  
  }
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Confidience'
          component={Confidence}
          />
        <Stack.Screen
          name='Oferta'
          component={Oferta}
        />
        <Stack.Screen
          name='Salad'
          component={SalatScreen}
          options={{
            headerShown: false
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  )};

export default App;