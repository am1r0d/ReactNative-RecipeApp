import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./StylesCard";

const Card = ({ title, image, servings, style }) => {
    return (
        //
        <View style={[styles.container, style]}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
                <Text numberOfLines={3} style={styles.title}>
                    {title}
                </Text>
                {servings ? (
                    <>
                        <Text style={styles.label}>Servings</Text>
                        <Text style={styles.value}>{servings}</Text>
                    </>
                ) : null}
            </View>
        </View>
    );
};

export default React.memo(Card);
