import { Button, Screen, Text } from "@components";
import React from "react";
import { AppTabsScreenProps } from "@types";


export function MyProfileScreen({navigation}:AppTabsScreenProps<'MyProfileScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">profile Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}