import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import Home from "./src/screens/Home/Home";
import Search from "./src/screens/Search/Search";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { getRecipesList } from "./src/http/http";

// Stack navigation
const Stack = createStackNavigator();

// context
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

//
const BackButton = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <Image style={styles.back} source={require("./assets/back.png")} />
        </Pressable>
    );
};

// DefaultTheme
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#FFFFFF",
    },
};

export default function App() {
    // useState
    const [recipes, setRecipes] = useState([]);
    const [healthyRecipes, setHealthyRecipes] = useState([]);
    //
    useEffect(() => {
        (async () => {
            const rec = await handleRecipesFetch(null, "15");
            setRecipes(rec);
            const healthyRec = await handleRecipesFetch("healthy", "5");
            setHealthyRecipes(healthyRec);
        })();
    }, []);

    const handleRecipesFetch = async (tags, size) => {
        try {
            const recipes = await getRecipesList(tags, size);
            return recipes?.data?.results;
        } catch (e) {
            console.log("error fetching recipes:>>", e);
        }
    };

    return (
        <HealthyRecipesContext.Provider
            value={{ healthyRecipes, setHealthyRecipes }}
        >
            <RecipesContext.Provider value={{ recipes, setRecipes }}>
                <NavigationContainer theme={theme}>
                    <Stack.Navigator
                        screenOptions={{
                            headerTitleAlign: "center",
                            headerShadowVisible: false,
                        }}
                    >
                        <Stack.Screen
                            name="Splash"
                            component={Splash}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerLeft: null,
                                gestureEnabled: false,
                            }}
                        />
                        <Stack.Screen
                            name="Search"
                            component={Search}
                            options={{
                                headerLeft: (props) => (
                                    <BackButton {...props} />
                                ),
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </RecipesContext.Provider>
        </HealthyRecipesContext.Provider>
    );
}

const styles = StyleSheet.create({
    back: {
        width: 24,
        height: 24,
        margin: 16,
    },
});
