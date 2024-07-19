import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './HomeStyle';
import { useQuery } from '@apollo/client';
import RadialGradientBackground from "@/src/app/components/common/RadialGradientBackground";
import { GET_EVENTS_LAST_WEEK} from "@/src/app/modules/events/EventsForCategory";

export const Home = () => {
    const endDate = new Date().toISOString().split('.')[0] + 'Z';
    const startDate = new Date();
    startDate.setDate(new Date().getDate() - 7);
    const startDateString = startDate.toISOString().split('.')[0] + 'Z';

    const { loading, error, data } = useQuery(GET_EVENTS_LAST_WEEK, {
        variables: { startDate: startDateString, endDate }
    });

    if (loading) {
        console.log("Loading data...");
        return <Text>Loading...</Text>;
    }
    if (error) {
        console.error("Error fetching data:", error);
        return <Text>Error: {error.message}</Text>;
    }

    if (data.eventsLastWeek.length === 0) {
        return <Text>No events found for the last week.</Text>;
    }


    return (
        <View style={styles.container}>
            <RadialGradientBackground />
                <Text style={styles.text}>Hello World</Text>
                <View>
                    <FlatList
                        data={data.eventsLastWeek}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        )}
                    />
            </View>
        </View>
    );
}



