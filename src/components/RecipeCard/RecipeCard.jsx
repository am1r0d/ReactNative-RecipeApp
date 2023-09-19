import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./StylesRecipeCard";

const RecipeCard = ({ title, image, author, rating, time }) => {
    return (
        //
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title}>
                {title}
            </Text>

            {/*  */}
            <View style={[styles.row, { justifyContent: "space-between" }]}>
                <View style={styles.row}>
                    <Image
                        style={styles.authorImage}
                        source={{ uri: author?.image }}
                    />
                    <Text style={styles.footerText}>By {author?.name}</Text>
                </View>

                {/*  */}
                <View style={styles.row}>
                    <Image
                        style={styles.timerIcon}
                        source={require("../../../assets/timer.png")}
                    />
                    <Text style={styles.footerText}>{time}</Text>
                </View>
            </View>
        </View>
    );
};

export default React.memo(RecipeCard);
