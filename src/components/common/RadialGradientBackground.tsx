// RadialGradientBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const RadialGradientBackground = () => {
    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%">
                <Defs>
                    <RadialGradient
                        id="grad"
                        cx="50%"
                        cy="50%"
                        rx="50%"
                        ry="50%"
                        fx="50%"
                        fy="50%"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgb(235,7,239)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="rgb(112,22,227)" stopOpacity="1" />
                    </RadialGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)" />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default RadialGradientBackground;


