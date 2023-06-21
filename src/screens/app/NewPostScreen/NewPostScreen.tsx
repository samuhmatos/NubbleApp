import { Button, Screen, Text } from "@components";
import React from "react";
import { AppTabsScreenProps } from "@types";


export function NewPostScreen({navigation}:AppTabsScreenProps<'NewPostScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">New post Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}