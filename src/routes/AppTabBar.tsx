import React from 'react';
import { Box, TouchableOpacityBox, Text, TextProps, Icon, TouchableOpacityBoxProps, BoxProps } from '@components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppTabBottomTabParamLIst } from '@routes'
import { mapScreenToProps } from './mapScreenToProps';
import { useAppSafeArea } from '@hooks';
import { $shadowProps } from '@theme';



export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const {bottom} = useAppSafeArea()

  return (
    <Box 
        {...$boxWrapper}
        style={[{paddingBottom:bottom}, $shadowProps]}
    >
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
            navigation.navigate({ name: route.name, params: route.params, merge: true });
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
            {...$itemWrapper}
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
            <Text
                color={isFocused ? 'primary' : 'backgroundContrast'}
                {...$label}
            >
                {TabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
    semiBold: true,
    mt:"s4",
    preset:"paragraphCaption"
}

const $itemWrapper: TouchableOpacityBoxProps = {
    activeOpacity:1,
    alignItems:'center',
    accessibilityRole:"button",
}

const $boxWrapper: BoxProps = {
    flexDirection:'row',
    paddingTop:'s12',
    backgroundColor: 'background'
}