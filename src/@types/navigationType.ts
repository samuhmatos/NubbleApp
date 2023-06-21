import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList, RootStackParamList } from "@routes";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList {}
    }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> = 
NativeStackScreenProps< AppStackParamList, RouteName>
