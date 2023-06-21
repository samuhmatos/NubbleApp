import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { ForgotPasswordScreen, LoginScreen, SignUpScreen, SuccessScreen } from '@screens'
import { IconProps } from "@components";


export type AuthStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen : {
        title: string;
        description: string;
        icon: Pick<IconProps, 'name' | 'color'>;
    };
    ForgotPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export function AuthStack(){
    return (
        <Stack.Navigator 
            initialRouteName="LoginScreen" 
            screenOptions={{
                headerShown:false,
                fullScreenGestureEnabled: true
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
}