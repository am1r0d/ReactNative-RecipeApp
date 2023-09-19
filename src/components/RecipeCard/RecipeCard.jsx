import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./StylesRecipeCard";
import Rating from "../Rating/Rating";

const RecipeCard = ({ title, image, author, rating, time, style }) => {
    return (
        //
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>
                    {/* Raring component */}
                    <Rating rating={4.4} />
                </View>

                <Image
                    style={styles.image}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkH0mfiD7EvLivall1hq0zkntcFg-yLtlTZv2KmMgye8Ip-Tl9w7zI_F7wBURa4iFQg4&usqp=CAU",
                    }}
                />
            </View>

            {/*  */}
            <View style={styles.footer}>
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
