import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Icon } from "../../../components/Icon/Icon";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";

export function LoginScreen(){
    return (
        <Screen>
            <Text marginBottom='s8' preset='headingLarge'>Olá</Text>
            <Text preset='paragraphLarge' mb='s40'>Digite seu email e senha para entrar</Text>

            <TextInput
                label='E-mail'
                placeholder='Digite seu email' 
                errorMessage='Mensagem de erro'
                boxProps={{mb:'s20'}}
            />
            <TextInput 
                label='Senha'
                placeholder='Digite sua senha' 
                RightComponent={<Icon name="eyeOn" color='gray2'/>}
                boxProps={{mb:'s10'}}
            />

            <Text color='primary' preset='paragraphSmall' bold>Esqueci minha senha</Text>

            <Button title='Entrar' mt='s48'/>
            <Button preset='outline' title='Criar uma conta' mt='s12'/>
        </Screen>  
    )
}