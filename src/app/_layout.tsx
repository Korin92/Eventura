import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { client } from "../adapters/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import RadialGradientBackground from "../components/common/RadialGradientBackground";


export default function Layout() {
    return (
        <ApolloProvider client={client}>
            <View style={styles.container}>
                <RadialGradientBackground />
                <View style={styles.content}>
                    <Stack
                        screenOptions={{
                            headerStyle: { backgroundColor: "transparent" },
                            headerTintColor: "yellow",
                            headerTitle: "",
                        }}
                    />
                </View>
            </View>
        </ApolloProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: "transparent",
    },
});
