import React from "react";
import { Box } from "../Box/Box";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";
import { useAppTheme } from "../../hooks/useAppTheme";

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
                        <Box mb="s24" flexDirection="row">
                            <Icon name="arrowLeft" color="primary" />
                            <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
                        </Box>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}