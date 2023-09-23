import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import styles from "./StylesRecipeDetails";
import Title from "../../components/Title/Title";
import { ScrollView } from "react-native-gesture-handler";

const RecipeDetails = ({ route }) => {
    const { item } = route?.params || {};
    const nutrition = item?.nutrition;
    const instructions = item?.instructions || [];
    delete nutrition?.updated_at;
    const nutritionKey = Object.keys(nutrition || {});

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{ uri: item?.thumbnail_url }}
                />
                <Title style={{ marginBottom: 32 }} text={item?.name} />
                {nutritionKey?.map((key) => (
                    <View key={key} style={styles.row}>
                        <Text style={styles.key}>{key}</Text>
                        <Text style={styles.value}>{nutrition[key]}</Text>
                    </View>
                ))}

                <Title
                    style={{ marginTop: 32, marginBottom: 16 }}
                    text="Instructions"
                />
                {instructions?.map((instruction, index) => (
                    <View key={instruction?.id} style={styles.instructionRow}>
                        <Text style={styles.index}>{index + 1}</Text>
                        <Text style={styles.instructionText}>
                            {instruction?.display_text}
                        </Text>
                    </View>
                ))}

                {!instructions?.length ? (
                    <Text style={styles.value}>No instructions found.</Text>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(RecipeDetails);
