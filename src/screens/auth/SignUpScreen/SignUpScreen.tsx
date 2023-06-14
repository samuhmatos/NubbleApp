import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>


export function SignUpScreen({navigation}:ScreenProps){
    
    function submitForm(){
        //TODO: Implementar
        navigation.navigate("SuccessScreen")
    }


    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <TextInput
                label='Seu username'
                placeholder='@' 
                boxProps={{mb:'s20'}}
            />
            <TextInput
                label='Nome Completo'
                placeholder='Digite seu nome' 
                boxProps={{mb:'s20'}}
            />
            <TextInput
                label='E=mail'
                placeholder='Digite seu email' 
                boxProps={{mb:'s20'}}
            />

            <PasswordInput 
                label='Senha'
                placeholder='Digite sua senha' 
                boxProps={{mb:'s20'}}
            />
            

            <Button title='criar uma conta' onPress={submitForm}/>
        </Screen>
    )
}