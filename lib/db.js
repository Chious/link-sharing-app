const { MongoClient, ServerApiVersion } = require('mongodb');
import { S3Client } from '@aws-sdk/client-s3';

export async function connectToDatabase() {
  const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@personal-blog-nextjs.vi9j6tk.mongodb.net/sharing-app?retryWrites=true&w=majority`;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client;
}

export async function connectToAWS() {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_SECRET,
    },
    region: process.env.BUCKET_REGION,
  });

  return client;
}
