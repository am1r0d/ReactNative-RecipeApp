import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./StylesCard";

const Card = ({ title, image, servings, style, onPress }) => {
    return (
        //
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
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
        </TouchableOpacity>
    );
};

export default React.memo(Card);
