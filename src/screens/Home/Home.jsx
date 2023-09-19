import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./StylesHome";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.background}>
            <Text>Welcome</Text>
            <Text onPress={() => navigation.navigate("Search")}>
                Go to Search
            </Text>
        </SafeAreaView>
    );
};

export default React.memo(Home);
