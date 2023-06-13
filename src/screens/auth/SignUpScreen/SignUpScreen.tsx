import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { Icon } from "../../../components/Icon/Icon";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";

export function SignUpScreen(){

    function submitForm(){
        //TODO: Implementar
    }
    return (
        <Screen canGoBack>
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

            <TextInput 
                label='Senha'
                placeholder='Digite sua senha' 
                RightComponent={<Icon name="eyeOn" color='gray2'/>}
                boxProps={{mb:'s48'}}
            />

            <Button title='criar uma conta' onPress={submitForm}/>
        </Screen>
    )
}