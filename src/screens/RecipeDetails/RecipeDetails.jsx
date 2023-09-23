import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./StylesRecipeDetails";
import Title from "../../components/Title/Title";

const RecipeDetails = ({ route }) => {
    const { item } = route?.params || {};
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
            <Title text={item?.name} />
        </SafeAreaView>
    );
};

export default React.memo(RecipeDetails);
