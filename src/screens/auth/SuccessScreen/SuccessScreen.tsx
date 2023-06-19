import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes";

import {
    Text, 
    Icon,
    Button, 
    Screen,
} from '@components'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({
    navigation,
    route
}:ScreenProps){
    const {title, description, icon} = route.params;

    function goBackToBegin(){
        navigation.goBack()
    }

    return (
        <Screen>
            <Icon {...icon} />
            <Text preset="headingLarge" mt="s24"  >{title}</Text>
            <Text preset="paragraphLarge" mt="s16">{description}</Text>
            <Button onPress={goBackToBegin} title="Voltar ao inicio" mt="s40"/>
        </Screen>
    )
}