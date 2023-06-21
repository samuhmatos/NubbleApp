import { Button, Screen, Text } from "@components";
import React from "react";
import { AppScreenProps } from "@types";


export function HomeScreen({navigation}:AppScreenProps<'HomeScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}