import React from "react";
import { Screen } from "../../../components/Screen/Screen";
import { Icon } from "../../../components/Icon/Icon";
import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({navigation}:ScreenProps){

    function goBackToBegin(){
        // TODO: navigate to login screen
    }

    return (
        <Screen>
            <Icon name="bellOn"/>
            <Text preset="headingLarge" mt="s24">Title</Text>
            <Text preset="paragraphLarge" mt="s16">description</Text>
            <Button onPress={goBackToBegin} title="Voltar ao inicio" mt="s40"/>
        </Screen>
    )
}