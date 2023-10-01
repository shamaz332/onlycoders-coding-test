import { MongoClient } from 'mongodb';

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = await MongoClient.connect('mongodb+srv://user332:user332@cluster0.gkex7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedDb = client.db();

  return { db: cachedDb };
}
