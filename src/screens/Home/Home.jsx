import React, { useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from "./StylesHome";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Card from "../../components/Card/Card";
import { HealthyRecipesContext, RecipesContext } from "../../../App";

const Home = ({ navigation }) => {
    const { recipes } = useContext(RecipesContext);
    const { healthyRecipes } = useContext(HealthyRecipesContext);

    // console.log("recipes:>>", recipes);
    console.log("healthyRecipes:>>", healthyRecipes);
    return (
        <SafeAreaView style={styles.container}>
            <Input pressable onPress={() => navigation.navigate("Search")} />

            <Title text="Healthy Recipes" />

            <FlatList
                horizontal
                data={healthyRecipes}
                style={{ marginHorizontal: -24 }}
                keyExtractor={(item) => String(item)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <RecipeCard
                        style={index === 0 ? { marginLeft: 24 } : {}}
                        title={item?.name}
                        time={item?.cook_time_minutes}
                        image={item?.thumbnail_url}
                        rating={item?.user_ratings?.score}
                        author={
                            item?.credits?.length
                                ? {
                                      name: item?.credits[0]?.name,
                                      image: item?.credits[0]?.image_url,
                                  }
                                : null
                        }
                    />
                )}
            />

            <Categories
                categories={["All", "Trending"]}
                selectedCategory="All"
                onCategoryPress={() => {}}
            />

            <FlatList
                horizontal
                data={[1, 2, 3, 4]}
                style={{ marginHorizontal: -24 }}
                keyExtractor={(item) => String(item)}
                showsHorizontalScrollIndicator={false}
                renderItem={(index) => (
                    <Card
                        style={index === 0 ? { marginLeft: 24 } : {}}
                        title="Steak with tomato sauce and bulgur rice."
                        time="20 mins"
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default React.memo(Home);
