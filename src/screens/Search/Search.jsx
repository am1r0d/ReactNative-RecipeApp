import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./StylesSearch";
import Input from "../../components/Input/Input";

const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input autoFocus />
        </SafeAreaView>
    );
};

export default React.memo(Search);
