import { Redis } from '@upstash/redis'

import dotenv from 'dotenv';
dotenv.config();

// Initialize Redis
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
(async () => {
    await redis.set('foo', 'bar');
    const data = await redis.get('foo');
    console.log('Data from Redis:', data); // Should log: "bar"
})();

export default redis;

