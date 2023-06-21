import { Screen, Text } from '@components'
import React from 'react'
import { AppScreenProps } from 'src/@types/navigationType'


export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
    return (
      <Screen canGoBack>
        <Text preset='headingLarge'>Setting Screen</Text>
      </Screen>
    )
}