import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen, HomeScreen, MyProfileScreen, NewPostScreen } from '@screens';


export type AppTabBottomTabParamLIst = {
    HomeScreen: undefined;
    NewPostScreen: undefined;
    FavoriteScreen: undefined;
    MyProfileScreen: undefined;
}
const Tab = createBottomTabNavigator<AppTabBottomTabParamLIst>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
        <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      </Tab.Navigator>
  );
}