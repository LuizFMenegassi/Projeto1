import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
  Montserrat_400Regular_Italic 
} from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/cesta';

export default function App() {
  const [fontecarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

