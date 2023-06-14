import React from "react";

import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";
import { LoginSchema, loginSchema } from "./loginScreenSchema";
import {zodResolver} from '@hookform/resolvers/zod'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>


export function LoginScreen({navigation}:ScreenProps){
    const {control, formState, handleSubmit} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password:'',
        },
        mode:'onChange'
    })

    function navigationToSignUpScreen(){
        navigation.navigate("SignUpScreen");
    }

    function navigateToForgotPasswordScreen(){
        navigation.navigate("ForgotPasswordScreen")
    }

    function submitForm({email, password}:LoginSchema){
        Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`)
    }


    return (
        <Screen>
            <Text marginBottom='s8' preset='headingLarge'>Olá</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu email e senha para entrar</Text>
            
            <FormTextInput
                control={control}
                name="email"
                boxProps={{mb:'s20'}}
                label='Email'
                placeholder='Digite seu email' 
            />

            <FormPasswordInput
                control={control}
                name="password"
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

            <Button 
                title='Entrar' 
                mt='s48'
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />
            <Button 
                preset='outline' 
                title='Criar uma conta' 
                mt='s12' 
                onPress={handleSubmit(navigationToSignUpScreen)}
                disabled={!formState.isValid}
            />
        </Screen>  
    )
}