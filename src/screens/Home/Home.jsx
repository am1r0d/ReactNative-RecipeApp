import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from "./StylesHome";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Card from "../../components/Card/Card";
import { HealthyRecipesContext, RecipesContext } from "../../../App";

const Home = ({ navigation }) => {
    // useState
    const { recipes } = useContext(RecipesContext);
    const { healthyRecipes } = useContext(HealthyRecipesContext);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState();
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    // useEffect
    useEffect(() => {
        const tagsList = [];

        recipes?.forEach((recipe) => {
            recipe?.tags?.forEach((tag) => {
                if (!tagsList?.includes(tag?.name)) {
                    tagsList?.push(tag?.name);
                }
            });
        });

        setTags(tagsList);
    }, [recipes]);

    useEffect(() => {
        if (selectedTag) {
            const filteredItems = recipes?.filter((rec) => {
                const tag = rec?.tags?.find((t) => t?.name === selectedTag);
                return !!tag;
            });
            setFilteredRecipes(filteredItems);
        } else {
            setFilteredRecipes(recipes);
        }
    }, [selectedTag, recipes]);

    return (
        <SafeAreaView style={styles.container}>
            <Input pressable onPress={() => navigation.navigate("Search")} />

            <Title text="Healthy Recipes" />

            <FlatList
                horizontal
                data={healthyRecipes}
                style={{ marginHorizontal: -24 }}
                keyExtractor={(item) => String(item?.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <RecipeCard
                        style={index === 0 ? { marginLeft: 24 } : {}}
                        onPress={() =>
                            navigation.navigate("RecipeDetails", { item })
                        }
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
                categories={tags}
                selectedCategory={selectedTag}
                onCategoryPress={setSelectedTag}
            />
            <FlatList
                horizontal
                data={filteredRecipes}
                style={{ marginHorizontal: -24 }}
                keyExtractor={(item) => String(item)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Card
                        style={index === 0 ? { marginLeft: 24 } : {}}
                        onPress={() =>
                            navigation.navigate("RecipeDetails", { item })
                        }
                        title={item?.name}
                        servings={item?.num_servings}
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
        </SafeAreaView>
    );
};

export default React.memo(Home);
