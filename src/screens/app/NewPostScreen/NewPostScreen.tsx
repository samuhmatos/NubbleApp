import { Button, Screen, Text } from "@components";
import React from "react";
import { AppScreenProps } from "@types";


export function NewPostScreen({navigation}:AppScreenProps<'AppTabNavigator'>){
    return (
        <Screen>
            <Text preset="headingLarge">New post Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}