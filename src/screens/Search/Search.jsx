import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from "./StylesSearch";
import Input from "../../components/Input/Input";
import { RecipesContext } from "../../../App";
import Card from "../../components/Card/Card";

const Search = () => {
    const { recipes } = useContext(RecipesContext);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    return (
        <SafeAreaView style={styles.container}>
            <Input autoFocus />
            <FlatList
                data={filteredRecipes}
                keyExtractor={(item) => String(item?.id)}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <Card
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

export default React.memo(Search);
