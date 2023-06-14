import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../../routes/routes";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

export function ForgotPasswordScreen({navigation, route}:ScreenProps){
    const {reset} = useResetNavigationSuccess()

    function submitForm(){
        // TODO: navigate to recoverPassword scree
        reset({
            title: `Enviamos as instruções ${'\n'}para seu email`,
            description:'Clique no link enviado no seu email para recuperar sua senha',
            icon:{
                name:'messageRound',
                color:'success'
            }
        })
    }


    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mb="s32">Digite seu email e enviaremos as instruções para redefinição de senha</Text>
            <TextInput 
                label="Email"
                placeholder="Digite seu email"
                boxProps={{
                    mb:'s40'
                }}
            />
            <Button title="Recuperar senha" onPress={submitForm}/>

        </Screen>
    )
}