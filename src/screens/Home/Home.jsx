import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./StylesHome";
import Input from "../../components/Input/Input";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome</Text>
            <Text onPress={() => navigation.navigate("Search")}>
                Go to Search
            </Text>
            <Input />
        </SafeAreaView>
    );
};

export default React.memo(Home);
