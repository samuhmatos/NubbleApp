import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {LoginSchema, loginSchema} from './loginScreenSchema';
import { AuthScreenProps } from '@types';


export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu email e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        boxProps={{mb: 's20'}}
        label="Email"
        placeholder="Digite seu email"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        preset="outline"
        title="Criar uma conta"
        mt="s12"
        onPress={navigationToSignUpScreen}
      />
    </Screen>
  );
}
