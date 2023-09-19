import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./StylesRecipeCard";

const RecipeCard = ({ title, image, author, rating, time }) => {
    return (
        //
        <View style={styles.container}>
            <View style={styles.row}>
                <Text numberOfLines={1} style={styles.title}>
                    {title}
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkH0mfiD7EvLivall1hq0zkntcFg-yLtlTZv2KmMgye8Ip-Tl9w7zI_F7wBURa4iFQg4&usqp=CAU",
                    }}
                />
            </View>

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
