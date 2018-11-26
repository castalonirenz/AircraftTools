import { createStackNavigator } from "react-navigation";
import loginScreen from "../screens/loginScreen";


export const RootStack = createStackNavigator({
    Login:{
        screen: loginScreen
    }
})