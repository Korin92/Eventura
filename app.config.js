import 'dotenv/config';

module.exports = {
    expo: {
        name: 'Eventura',
        slug: 'Eventura',
        extra: {
            EXPO_PUBLIC_TICKETMASTER_API_KEY: process.env.EXPO_SECRET_API_KEY,
        }
    },
}