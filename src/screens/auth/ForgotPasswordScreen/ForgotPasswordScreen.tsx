import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ForgotPasswordSchema, forgotPasswordSchema } from "./forgotPasswordSchema";
import { useResetNavigationSuccess } from "@hooks";
import {
    Text, 
    Button, 
    Screen,
    FormTextInput,
} from '@components'
import { AuthScreenProps } from "@types";


export function ForgotPasswordScreen({navigation, route}:AuthScreenProps<'ForgotPasswordScreen'>){
    const {reset} = useResetNavigationSuccess()

    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues:{
            email:'',
        },
        mode:'onChange'
    })

    function submitForm({email}:ForgotPasswordSchema){
        console.log(email)
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
            
            <FormTextInput 
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                boxProps={{
                    mb:'s40'
                }}
            />
            <Button 
                title="Recuperar senha" 
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />

        </Screen>
    )
}