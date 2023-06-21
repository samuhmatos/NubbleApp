import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { IconProps } from "@components";
import {AppStack, AuthStack} from '@routes'


export type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen : {
        title: string;
        description: string;
        icon: Pick<IconProps, 'name' | 'color'>;
    };
    ForgotPasswordScreen: undefined;
}


export function Router(){
    const authenticated = true;
    
    return (
        <NavigationContainer>
            {authenticated ? (
                <AppStack />
            ):(
                <AuthStack />
            )}
        </NavigationContainer>
    )
}