import { Button, Screen, Text } from "@components";
import React from "react";
import { AppTabsScreenProps } from "@types";



export function HomeScreen({navigation}:AppTabsScreenProps<'HomeScreen'>){
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
            <Button title="favorite" mt="s10" onPress={()=>navigation.navigate("FavoriteScreen")}/>
        </Screen>
    )
}