import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/auth/LoginScreen/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignUpScreen/SignUpScreen";


export type RootStackParamList = {
    LoginScreen: undefined,
    SignUpScreen: undefined
    // Success Screen : icon, title, description
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Router(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="LoginScreen" 
                screenOptions={{
                    headerShown:false,
                    fullScreenGestureEnabled: true
                }}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}