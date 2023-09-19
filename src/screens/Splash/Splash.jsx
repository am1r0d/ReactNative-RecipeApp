import React, { useContext, useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./StylesSplash";
import Button from "../../components/Button/Button";
import { getRecipesList } from "../../http/http";
import { RecipesContext } from "../../../App";

const Splash = ({ navigation }) => {
    const { setRecipes } = useContext(RecipesContext);
    //
    useEffect(() => {
        handleRecipesFetch();
    }, []);
    const handleRecipesFetch = async () => {
        try {
            const recipes = await getRecipesList();
            setRecipes(recipes?.data?.results);
        } catch (e) {
            console.log("error fetching recipes:>>", e);
        }
    };

    //
    return (
        <ImageBackground
            style={styles.background}
            source={require("../../../assets/splash.png")}
        >
            {/* Icon + 100K+ */}
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/logo.png")}
                />
                <Text style={styles.title}>100K+ Premium Recipe</Text>
            </View>

            {/* Get cooking */}
            <View style={styles.as}>
                <Text style={styles.bigTitle}>Get</Text>
                <Text style={styles.bigTitle}>Cooking</Text>
                <Text style={styles.subtitle}>
                    Simple way to find Tasty Recipe
                </Text>

                <Button onPress={() => navigation.navigate("Home")}>
                    Start Cooking
                </Button>
            </View>
        </ImageBackground>
    );
};

export default React.memo(Splash);
