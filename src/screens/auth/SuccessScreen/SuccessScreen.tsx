import React from "react";

import {
    Text, 
    Icon,
    Button, 
    Screen,
} from '@components'
import { AuthScreenProps } from "@types";


export function SuccessScreen({
    navigation,
    route
}:AuthScreenProps<'SuccessScreen'>){
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