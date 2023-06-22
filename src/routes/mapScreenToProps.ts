import { IconProps } from "@components";
import { AppTabBottomTabParamLIst } from "./AppTabNavigator";

export const mapScreenToProps: Record<
    keyof AppTabBottomTabParamLIst,
    {
        label: string;
        icon:{
            focused: IconProps['name'];
            unfocused: IconProps['name'];
        }
    }
> = {
    HomeScreen: {
        label: 'Início',
        icon: {
          focused: 'homeFill',
          unfocused: 'home',
        },
    },
    NewPostScreen: {
        label: 'Novo post',
        icon: {
          focused: 'newPost',
          unfocused: 'newPost',
        },
    },
    FavoriteScreen: {
        label: 'Favorito',
        icon: {
          focused: 'bookmarkFill',
          unfocused: 'bookmark',
        },
    },
    MyProfileScreen: {
        label: 'Meu perfil',
        icon: {
          focused: 'profileFill',
          unfocused: 'profile',
        },
    },
}