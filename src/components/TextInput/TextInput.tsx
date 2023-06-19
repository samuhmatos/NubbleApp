import React, { useRef } from "react";
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TextStyle } from "react-native";
import { Box, BoxProps } from "../Box/Box";
import { $fontFamily, $fontSizes, Text } from "../Text/Text";
import { useAppTheme } from "@hooks";

export interface TextInputProps extends RNTextInputProps{
    label:string;
    errorMessage?:string;
    RightComponent?:React.ReactElement;
    boxProps?:BoxProps;
}

export function TextInput({
    label, 
    errorMessage,
    RightComponent,
    boxProps,
    ...rnTextInputProps
} : TextInputProps){
    const {colors} = useAppTheme();
    const inputRef = useRef<RNTextInput>(null)


    const $textInputContainer:BoxProps = {
        flexDirection:'row',
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? 'error' : "gray4",
        padding:'s16',
        borderRadius:"s12"
    }

    function focusInput(){
        inputRef.current?.focus()
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                <Text mb="s4" preset="paragraphMedium">{label}</Text>
                <Box {...$textInputContainer}>
                    <RNTextInput 
                        autoCapitalize="none"
                        ref={inputRef}
                        placeholderTextColor={colors.gray2}
                        style={$textInputStyle}
                        {...rnTextInputProps} 
                    />
                    {RightComponent && (
                        <Box ml="s16" justifyContent="center">
                            {RightComponent}
                        </Box>
                    )}
                </Box>
                {errorMessage && <Text preset="paragraphSmall" bold color="error">{errorMessage}</Text>}
            </Pressable>
        </Box>
    )
}

const $textInputStyle: TextStyle = {
    flexGrow:1,
    flexShrink:1,
    padding:0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium
}

