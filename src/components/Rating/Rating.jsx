import React from "react";
import { Text, Image, TextInput, View } from "react-native";
import styles from "./StylesRating";

const Rating = ({ rating }) => {
    const arr = [1, 2, 3, 4, 5];
    // 0.0 - 1.4 --> 1 Star
    // 1.5 - 2.4 --> 2 Star
    // 2.5 - 3.4 --> 3 Star
    // 3.5 - 4.4 --> 4 Star
    // 4.5 - 5.0 --> 5 Star
    // rating

    const renderStars = () => {
        return arr?.map((star) => {
            if (Math.round(rating) >= star) {
                return (
                    <Image
                        style={styles.star}
                        source={require("../../../assets/star.png")}
                    />
                );
            }
            return (
                <Image
                    style={styles.star}
                    source={require("../../../assets/starEmpty.png")}
                />
            );
        });
    };

    return <View style={styles.row}>{renderStars()}</View>;
};

export default React.memo(Rating);
