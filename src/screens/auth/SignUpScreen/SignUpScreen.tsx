import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>


export function SignUpScreen({navigation}:ScreenProps){
    const {reset} = useResetNavigationSuccess()
    
    function submitForm(){
        //TODO: Implementar
        
        reset({
            title:'Sua conta foi criada com sucesso!',
            description:'Agora é só fazer o login na nossa plataforma',
            icon:{
                name:"checkRound",
                color:'success'
            }
        })

        
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