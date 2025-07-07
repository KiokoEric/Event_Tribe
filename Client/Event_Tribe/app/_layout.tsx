import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';

const _layout = () => {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "InstrumentSerif": require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name='index' options={{
          headerShown: false
        }} />
      </Stack>
  )
}

export default _layout
