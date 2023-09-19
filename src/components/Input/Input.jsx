import React from "react";
import { Text, Image, TextInput, View } from "react-native";
import styles from "./StylesInput";
import colors from "../../constants/colors";

const Input = ({ placeholder, showSearchIcon, style }) => {
    return (
        <View style={styles.container}>
            {showSearchIcon ? (
                <Image
                    style={styles.icon}
                    source={require("../../../assets/search.png")}
                />
            ) : null}
            <TextInput
                placeholderTextColor={colors.lightGrey}
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    );
};

Input.defaultProps = {
    placeholder: "Search recipe",
    showSearchIcon: true,
};

export default React.memo(Input);
