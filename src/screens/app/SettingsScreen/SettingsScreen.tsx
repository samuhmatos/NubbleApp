import { Screen, Text } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { AppStackParamList } from 'src/routes/AppStack'

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>

export function SettingsScreen() {
    return (
      <Screen canGoBack>
        <Text preset='headingLarge'>Setting Screen</Text>
      </Screen>
    )
}