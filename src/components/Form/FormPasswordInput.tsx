import React from "react";

import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInputProps } from "../TextInput/TextInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";


export function FormPasswordInput<FormType extends FieldValues>({
    control, 
    name, 
    rules, 
    ...TextInputProps
}:TextInputProps & UseControllerProps<FormType>){


    return (
        <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field, fieldState, formState})=>(
                    <PasswordInput
                        errorMessage={fieldState.error?.message}
                        value={field.value}
                        onChangeText={field.onChange}
                        {...TextInputProps}
                    />
                )}
            />
    )
}