// RadialGradientBackground.js
import React from 'react';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { StyleSheet } from 'react-native';

const RadialGradientBackground = () => {
    return (
        <Svg height="100%" width="100%" style={styles.background}>
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
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});

export default RadialGradientBackground;