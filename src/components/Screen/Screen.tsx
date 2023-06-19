import React from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";


import { 
    Box, 
    TouchableOpacityBox, 
    Icon,
    Text
} from "@components";
import { useAppSafeArea,useAppTheme } from "@hooks";
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer'

interface ScreenProps{
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({
    children, 
    canGoBack = false, 
    scrollable = false
}:ScreenProps){
    const {top,bottom} = useAppSafeArea()
    const {colors} = useAppTheme()
    const navigation = useNavigation()

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : undefined} 
            style={{flex:1}}
        >
            <Container backgroundColor={colors.background}>
                <Box 
                    paddingHorizontal="s24" 
                    style={{paddingTop: top, paddingBottom: bottom}}
                >
                    {canGoBack && (
                        <TouchableOpacityBox onPress={navigation.goBack}>
                            <Box mb="s24" flexDirection="row">
                                <Icon name="arrowLeft" color="primary" />
                                <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
                            </Box>
                        </TouchableOpacityBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}