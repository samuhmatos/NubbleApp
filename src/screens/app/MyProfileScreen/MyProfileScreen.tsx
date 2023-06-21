import { Button, Screen, Text } from "@components";
import React from "react";
import { AppScreenProps } from "@types";


export function MyProfileScreen({navigation}:AppScreenProps<'AppTabNavigator'>){
    return (
        <Screen>
            <Text preset="headingLarge">profile Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}