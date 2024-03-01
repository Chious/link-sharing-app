const { MongoClient, ServerApiVersion } = require('mongodb');

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
