import { Button, Screen, Text } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { AppStackParamList } from "src/routes/AppStack";

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>

export function HomeScreen({navigation}:ScreenProps){
    return (
        <Screen>
            <Text preset="headingLarge">Home Screen</Text>
            <Button title="settings" onPress={()=>navigation.navigate("SettingsScreen")}/>
        </Screen>
    )
}