import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_EVENTS_LAST_WEEK } from "../../modules/events/EventsForCategory";
import RadialGradientBackground from "../../components/common/RadialGradientBackground";

export const Home = () => {
    const { loading, error, data } = useQuery(GET_EVENTS_LAST_WEEK);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    if (!data || !data.eventsLastWeek || data.eventsLastWeek.length === 0) {
        return <Text>No events found for the last week.</Text>;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Events Last Week</Text>
            <FlatList
                data={data.eventsLastWeek}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'transparent', // Asegúrate de que el fondo sea transparente
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white', // Asegúrate de que el texto sea visible sobre el fondo
    },
    flatList: {
        backgroundColor: 'transparent', // Fondo transparente para la FlatList
    },
    flatListContent: {
        paddingBottom: 16,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)', // Color de borde con opacidad
        backgroundColor: 'transparent', // Fondo transparente para los elementos
    },
    itemText: {
        fontSize: 18,
        color: 'white', // Asegúrate de que el texto sea visible sobre el fondo
    },
});





