import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeStyle';
import RadialGradientBackground from "@/components/common/RadialGradientBackground";

export const Home = () => {
    return (
        <View style={styles.container}>
            <RadialGradientBackground />
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
}