import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal:20}}>
          <Text preset='headingLarge' bold italic style={{}}>Samuel</Text>

          <Button title='Entrar' marginBottom='s20'/>
          <Button title='Outline' marginBottom='s20' preset='outline'/>
          <Button title='Outline' marginBottom='s20' preset='outline' loading/>
          <Button loading title='Loading' marginBottom='s20' />
          <Button disabled title='Desabilitado' marginBottom='s20' />
          <Button disabled preset='outline' title='Desabilitado' marginBottom='s20' />

        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
