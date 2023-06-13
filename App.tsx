import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';
import { TextInput } from './src/components/TextInput/TextInput';

function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal:20}}>
          <Text marginBottom='s8' preset='headingLarge'>Olá</Text>
          <Text preset='paragraphLarge' mb='s40'>Digite seu email e senha para entrar</Text>

          <Box mb='s20'>
            <TextInput 
              label='E-mail'
              placeholder='Digite seu email' 
            />
          </Box>
          <Box>
            <TextInput 
              label='Senha'
              placeholder='Digite sua sennha' 
            />
          </Box>
          <Text mt="s10" color='primary' preset='paragraphSmall' bold>Esqueci minha senha</Text>

          <Button title='Entrar' mt='s48'/>
          <Button preset='outline' title='Criar uma conta' mt='s12'/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
