import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./StylesSearch";

const Search = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Text>Search</Text>
        </SafeAreaView>
    );
};

export default React.memo(Search);
