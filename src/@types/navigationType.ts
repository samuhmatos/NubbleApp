import { RootStackParamList } from "../routes/Routes";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList {}
    }
}