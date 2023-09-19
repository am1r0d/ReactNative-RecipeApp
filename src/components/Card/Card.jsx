import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./StylesCard";

const Card = ({ title, image, time, style }) => {
    return (
        //
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkH0mfiD7EvLivall1hq0zkntcFg-yLtlTZv2KmMgye8Ip-Tl9w7zI_F7wBURa4iFQg4&usqp=CAU",
                    }}
                />
                <Text numberOfLines={3} style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>{time}</Text>
            </View>
        </View>
    );
};

export default React.memo(Card);
