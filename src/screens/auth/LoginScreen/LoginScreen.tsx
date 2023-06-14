import React from "react";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";
import { useForm, Controller } from "react-hook-form";
import { Alert } from "react-native";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
type LoginFormType = {
    email: string;
    password: string
}

export function LoginScreen({navigation}:ScreenProps){
    const {control, formState, handleSubmit} = useForm<LoginFormType>({
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

    function submitForm({email, password}:LoginFormType){
        Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`)
    }


    return (
        <Screen>
            <Text marginBottom='s8' preset='headingLarge'>Olá</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu email e senha para entrar</Text>
            
            <FormTextInput
                control={control}
                name="email"
                rules={{
                    required:'Email é obrigatório',
                    pattern:{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Email inválido"
                    }
                }}
                boxProps={{mb:'s20'}}
                label='Email'
                placeholder='Digite seu email' 
            />

            <FormPasswordInput
                control={control}
                name="password"
                rules={{
                    required:'Senha é obrigatório',
                    minLength:{
                        value:8,
                        message:'Senha deve ter no mínimo 8 caracteres'
                    }
                }}
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
                onPress={navigationToSignUpScreen}
            />
        </Screen>  
    )
}