import React from 'react';
import { Box, TouchableOpacityBox, Text, Icon } from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppTabBottomTabParamLIst } from '@routes'
import { mapScreenToProps } from './mapScreenToProps';



export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <Box flexDirection='row'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        console.log(route.name)
        
        const TabItem = mapScreenToProps[route.name as keyof AppTabBottomTabParamLIst]

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            activeOpacity={1}
            alignItems='center'
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <Icon 
                name={isFocused ? TabItem.icon.focused : TabItem.icon.unfocused } 
                color={isFocused ? 'primary' : 'backgroundContrast'} 
            />
            <Text>{TabItem.label}</Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}