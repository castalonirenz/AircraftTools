import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";

export const globalStyle = StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor: "#021430"
    },
    textInput:{
        width:"90%",
        height: RF(10),
        backgroundColor:"white",
        borderRadius: RF(10),
        textAlign:"center",
        marginTop: 20,
        fontSize: RF(2.5)
    }
})