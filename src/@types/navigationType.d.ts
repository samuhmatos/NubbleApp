import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList, AuthStackParamList } from "@routes";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppTabBottomTabParamLIst } from "src/routes/AppTabNavigator";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends AuthStackParamList, AppStackParamList {}
    }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> = 
NativeStackScreenProps< AppStackParamList, RouteName>

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
NativeStackScreenProps<AuthStackParamList, RouteName>

export type AppTabsScreenProps<RouteName extends keyof AppTabBottomTabParamLIst
> = CompositeScreenProps< 
    BottomTabScreenProps<AppTabBottomTabParamLIst, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>