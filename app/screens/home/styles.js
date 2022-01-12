import { StyleSheet } from "react-native";
import { palette, spacing } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    button: {
        backgroundColor: palette.black,
        width:150,
        height:150,
        borderRadius: 75,
        justifyContent:'center',
        alignItems:'center'
    },

    buttonText: {
        color: palette.white,
        fontSize: spacing.large
    }
})