import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");
// const { width } = Dimensions.get("width");

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 10,
        width: width * 0.6,
        marginVertical: 16,
        // iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        // Android
        elevation: 9,
    },
    title: {
        fontSize: 14,
        color: colors.grey,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    footerText: { color: colors.lightGrey2, fontSize: 11 },
    authorImage: { width: 24, height: 24, marginRight: 8, borderRadius: 20 },
    timerIcon: { width: 17, height: 17, marginRight: 8 },
});
export default styles;
