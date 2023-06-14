import React from "react";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>


export function LoginScreen({navigation}:ScreenProps){

    function navigationToSignUpScreen(){
        navigation.navigate("SignUpScreen");
    }

    function navigateToForgotPasswordScreen(){
        navigation.navigate("ForgotPasswordScreen")
    }


    return (
        <Screen>
            <Text 
                marginBottom='s8' 
                preset='headingLarge'
            >
                Olá
            </Text>
            <Text 
                preset='paragraphLarge' 
                mb='s40'
            >
                Digite seu email e senha para entrar
            </Text>

            <TextInput
                label='Email'
                placeholder='Digite seu email' 
                errorMessage='Mensagem de erro'
                boxProps={{mb:'s20'}}
            />
            
            <PasswordInput 
                label='Senha'
                placeholder='Digite sua senha'
                boxProps={{mb:'s10'}}
            />

            <Text 
                color='primary' 
                preset='paragraphSmall' 
                bold
                onPress={navigateToForgotPasswordScreen}
            >
                Esqueci minha senha
            </Text>

            <Button title='Entrar' mt='s48'/>
            <Button 
                preset='outline' 
                title='Criar uma conta' 
                mt='s12' 
                onPress={navigationToSignUpScreen}
            />
        </Screen>  
    )
}