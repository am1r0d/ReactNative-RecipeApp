import React from "react";
import { Text, Image, TextInput, View } from "react-native";
import styles from "./StylesTitle";

const Title = ({ text, style }) => {
    return <Text style={[styles.title, style]}>{text}</Text>;
};
Title.defaultProps = {
    text: "Title",
};

export default React.memo(Title);
