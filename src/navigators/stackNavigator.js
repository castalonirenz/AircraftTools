import { createStackNavigator } from "react-navigation";
import loginScreen from "../screens/loginScreen";
import ScanScreen from "../componentWillRender/QRScanner";


export const RootStack = createStackNavigator({
    Login:{
        screen: ScanScreen
    }
})