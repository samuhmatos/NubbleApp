import React from "react";
import { 
    ActivityIndicator,
    TouchableOpacityBox, 
    TouchableOpacityBoxProps,
    Text
} from "@components";
import { buttonPresets } from "./ButtonPresets";

export type ButtonPreset = 'primary' | 'outline' ;



interface ButtonProps extends TouchableOpacityBoxProps{
    title: string;
    loading?: boolean;
    preset?:ButtonPreset
}

export function Button({
    title,
    loading,
    preset = 'primary',
    disabled,
    ...TouchableOpacityBoxProps
}:ButtonProps){

    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
    
    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...buttonPreset.container}
            {...TouchableOpacityBoxProps}
        >
            {loading ? 
                (
                    <ActivityIndicator color={buttonPreset.content} />
                ) :( 
                    <Text preset="paragraphMedium" bold color={buttonPreset.content}>
                        {title}
                    </Text>
                )
            }
            
        </TouchableOpacityBox>
    )
}