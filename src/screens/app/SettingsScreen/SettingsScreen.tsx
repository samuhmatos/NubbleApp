import { Button, Screen, Text } from '@components'
import React from 'react'
import { AppScreenProps } from '@types'


export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
    return (
      <Screen canGoBack>
        <Text preset='headingLarge'>Setting Screen</Text>
        <Button 
          title='post' 
          onPress={()=> navigation.navigate('AppTabNavigator',{
            screen: 'NewPostScreen'
          })}
        />
      </Screen>
    )
}