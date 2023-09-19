import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./StylesHome";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Welcome</Text> */}
            {/* <Text onPress={() => navigation.navigate("Search")}>Go to Search</Text> */}

            <Input pressable onPress={() => navigation.navigate("Search")} />

            <Title text="Featured Recipes" />
            <Categories
                categories={["All", "Trending"]}
                selectedCategory="All"
                onCategoryPress={() => {}}
            />
        </SafeAreaView>
    );
};

export default React.memo(Home);
