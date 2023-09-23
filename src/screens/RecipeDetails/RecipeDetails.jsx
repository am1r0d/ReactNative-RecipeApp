import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./StylesRecipeDetails";
import Title from "../../components/Title/Title";

const RecipeDetails = ({ route }) => {
    const { item } = route?.params || {};
    const nutrition = item?.nutrition;
    delete nutrition?.updated_at;
    const nutritionKey = Object.keys(nutrition || {});

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: item?.thumbnail_url }} />
            <Title style={{ marginBottom: 32 }} text={item?.name} />
            {nutritionKey?.map((key) => (
                <View key={key} style={styles.row}>
                    <Text style={styles.key}>{key}</Text>
                    <Text style={styles.value}>{nutrition[key]}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
};

export default React.memo(RecipeDetails);
