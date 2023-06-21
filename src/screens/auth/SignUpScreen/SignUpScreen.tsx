import React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'

import { SignUpSchema, signUpSchema } from "./signUpSchema";
import {
    Text, 
    Button, 
    Screen,
    FormTextInput,
    FormPasswordInput
} from '@components'

import { useResetNavigationSuccess } from "@hooks";
import { AuthScreenProps } from "@types";




export function SignUpScreen({navigation}:AuthScreenProps<'SignUpScreen'>){
    const {reset} = useResetNavigationSuccess()

    const {control, formState, handleSubmit} = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues:{
            username:'',
            fullName:'',
            email:'',
            password:'',
        },
        mode:'onChange'
    })
    
    function submitForm(formValues:SignUpSchema){
        console.log(formValues)
        
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

            <FormTextInput 
                control={control}
                name="username"
                label='Seu username'
                placeholder='@'
                boxProps={{mb:'s20'}}
            />

            <FormTextInput 
                control={control}
                name="fullName"
                label='Nome Completo'
                placeholder='Digite seu nome' 
                boxProps={{mb:'s20'}}
            />

            <FormTextInput 
                control={control}
                name="email"
                boxProps={{mb:'s20'}}
                label='E=mail'
                placeholder='Digite seu email' 
            />

            <FormPasswordInput 
                control={control}
                name="password"
                boxProps={{mb:'s20'}}
                label='Senha'
                placeholder='Digite sua senha'
            />
         
            <Button 
                title='criar uma conta' 
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />
        </Screen>
    )
}