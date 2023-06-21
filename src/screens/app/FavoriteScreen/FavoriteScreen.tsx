import { Button, Screen, Text } from "@components";
import React from "react";
import { AppTabsScreenProps } from "@types";


export function FavoriteScreen({navigation}:AppTabsScreenProps<'FavoriteScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">favorite Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}