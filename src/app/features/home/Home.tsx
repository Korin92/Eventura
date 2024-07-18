import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './HomeStyle';
import { useQuery } from '@apollo/client';
import RadialGradientBackground from "@/src/app/components/common/RadialGradientBackground";
import GET_EVENTOS_POR_CATEGORIA, {GET_EVENTS} from "@/src/app/modules/events/EventsForCategory";

export const Home = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);
    console.log('GraphQL Data:', data);
    if (loading) return <Text>Loading...</Text>;
    if (error) {
        console.error("Error fetching data2:", error);
        console.error("Error details:", error.networkError?.message || error.message); // Add this line for more details
        return <Text>Error: {error.message}</Text>;
    }


    return (
        <View style={styles.container}>
            <RadialGradientBackground />
                <Text style={styles.text}>Hello World</Text>
                <View>
                    <FlatList
                        data={data.events}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.name}</Text>
                                <Text>{item.localDate}</Text>
                                <Text>{item.venue.name}</Text>
                            </View>
                        )}
                    />
            </View>
        </View>
    );
}




const EventosPorCategoria = ({ categoria }: any) => {
    const { loading, error, data } = useQuery(GET_EVENTOS_POR_CATEGORIA, {
        variables: { categoria },
    });

    if (loading) return <Text>Cargando...</Text>;
    if (error) {
        console.error(error);
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View>
            <FlatList
                data={data.events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.dates.start.localDate}</Text>
                    </View>
                )}
            />
        </View>
    );
};


