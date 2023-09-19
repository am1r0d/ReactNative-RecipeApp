import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import Home from "./src/screens/Home/Home";
import Search from "./src/screens/Search/Search";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import React, { useState } from "react";

// Stack navigation
const Stack = createStackNavigator();

// context
export const RecipesContext = React.createContext();

//
const BackButton = (props) => {
    console.log("props:>>", props);
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
    const [recipes, setRecipes] = useState([]);
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

    return (
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
                        options={{ headerLeft: null, gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name="Search"
                        component={Search}
                        options={{
                            headerLeft: (props) => <BackButton {...props} />,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </RecipesContext.Provider>
    );
}

const styles = StyleSheet.create({
    back: {
        width: 24,
        height: 24,
        margin: 16,
    },
});
