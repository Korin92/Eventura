import 'dotenv/config';

export default {
    expo: {
        name: 'Eventura',
        slug: 'Eventura',
        extra: {
            TICKETMASTER_API_KEY: process.env.EXPO_PUBLIC_TICKETMASTER_API_KEY,
        }
    },
};