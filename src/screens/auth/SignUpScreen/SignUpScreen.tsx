import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { Controller, useForm } from "react-hook-form";
import { FormTextInput } from "../../../components/Form/FormTextInput";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
type SignUpFormType = {
    username: string;
    fullName: string;
    email: string;
    password: string;
}

export function SignUpScreen({navigation}:ScreenProps){
    const {reset} = useResetNavigationSuccess()

    const {control, formState, handleSubmit} = useForm<SignUpFormType>({
        defaultValues:{
            username:'',
            fullName:'',
            email:'',
            password:'',
        },
        mode:'onChange'
    })
    
    function submitForm(formValues:SignUpFormType){
        //TODO: Implementar
        
        /*
        reset({
            title:'Sua conta foi criada com sucesso!',
            description:'Agora é só fazer o login na nossa plataforma',
            icon:{
                name:"checkRound",
                color:'success'
            }
        })
        */
        
    }


    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

            <FormTextInput 
                control={control}
                name="username"
                rules={{
                    required:'Username é obrigatório!',
                }}
                label='Seu username'
                placeholder='@'
                boxProps={{mb:'s20'}}
            />
            {/* <Controller
                control={control}
                name="username"
                rules={{
                    required:'Username é obrigatório!',
                }}
                render={({field, fieldState, formState})=>(
                    <TextInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='Seu username'
                        placeholder='@'
                        boxProps={{mb:'s20'}}
                    />
                )}
            /> */}

            <Controller
                control={control}
                name="fullName"
                rules={{
                    required:'Nome completo é obrigatório!',
                }}
                render={({field, fieldState, formState})=>(
                    <TextInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='Nome Completo'
                        placeholder='Digite seu nome' 
                        boxProps={{mb:'s20'}}
                        autoCapitalize="words"
                    />
                )}
            />

            <Controller
                control={control}
                name="email"
                rules={{
                    required:'Email é obrigatório',
                    pattern:{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Email inválido"
                    }
                }}
                render={({field, fieldState, formState})=>(
                    <TextInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='E=mail'
                        placeholder='Digite seu email' 
                        boxProps={{mb:'s20'}}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{
                    required:'Senha é obrigatório',
                    minLength:{
                        value:8,
                        message:'Senha deve ter no mínimo 8 caracteres'
                    }
                }}
                render={({field, fieldState, formState})=>(
                    <PasswordInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        label='Senha'
                        placeholder='Digite sua senha'
                        boxProps={{mb:'s20'}}
                    />
                )}
            />

            <Button 
                title='criar uma conta' 
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />
        </Screen>
    )
}