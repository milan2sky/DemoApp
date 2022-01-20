
import React, { useState } from 'react';
import {
  StyleSheet
} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import LogInScreen from './src/Screens/LogInScreen';

export type whichScreenType = "loginScreen" | "homeScreen"

export const hardCodedUserName = "joe"
export const hardCodedPassword = "1234"

const App = () => {
  const [whichScreen, setWhichScreen] = useState<whichScreenType>("loginScreen")

  return (
    <>
      {whichScreen == "loginScreen" ? <LogInScreen setWhichScreen={setWhichScreen} /> : <HomeScreen setWhichScreen={setWhichScreen} />}
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
