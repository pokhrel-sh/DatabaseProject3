import { MongoClient } from 'mongodb';
import redis from 'redis';

const mongoClient = await MongoClient.connect('mongodb://localhost:27017');
const db = mongoClient.db('project3').collection('mockdatas');

async function functionsHAHA() {
    const redisClient = redis.createClient();

    async function cacheBugs(priorityID, priorityName) {
        redisClient.HMSET(`priorityID:${priorityID}`, { priorityName });
        redisClient.ZADD('bug_priority_cache', 1, priorityID);
    }

    async function deletePriority(priorityID) {
        redisClient.DEL(`priorityID:${priorityID}`);
    }

    async function createPriority(priorityID, priorityName) {
        await cacheBugs(priorityID, priorityName);
    }

    async function readBug(bugId) {
        return new Promise((resolve, reject) => {
            redisClient.HGETALL(`bug:${bugId}`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    async function updateBug(bugId, updatedFields) {
        return new Promise((resolve, reject) => {
            redisClient.HMSET(`bug:${bugId}`, updatedFields, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    return {
        cacheBugs,
        deletePriority,
        createPriority,
        readBug,
        updateBug
    };
}
