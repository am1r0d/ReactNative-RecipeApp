import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import Home from "./src/screens/Home/Home";
import Search from "./src/screens/Search/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

// Stack navigation
const Stack = createStackNavigator();

const BackButton = (props) => {
    console.log("props:>>", props);
    return (
        <Pressable onPress={props.onPress}>
            <Image style={styles.back} source={require("./assets/back.png")} />
        </Pressable>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenListeners={{ headerTitleAlign: "center" }}>
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
    );
}

const styles = StyleSheet.create({
    back: {
        width: 24,
        height: 24,
        margin: 16,
    },
});
