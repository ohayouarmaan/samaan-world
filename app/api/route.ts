import { MongoClient } from 'mongodb';

// MongoDB connection URI
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const collectionName = 'messages';

export async function POST(req: Request) {
  try {
    // Validate the message
    const { message } = await req.json();
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert the message
    const result = await collection.insertOne({
      message: message.trim(),
      createdAt: new Date(),
    });

    await client.close();

    return Response.json({ 
      success: true,
      message: 'Message saved successfully',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ 
      error: 'Failed to save message',
      details: error.message
    }, {
      status: 500
    });
  }
}
