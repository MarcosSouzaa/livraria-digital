// src/lib/db/mongodb.ts

import { MongoClient, ServerApiVersion } from "mongodb";

// As verificações de erro no topo são essenciais!
if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// O nome do DB é opcional, mas útil
const dbName = process.env.MONGODB_DB || "CrusterEducaVitrine";

const uri = process.env.MONGODB_URI;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Em desenvolvimento, reutilize a conexão globalmente (Singleton Pattern)
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // Armazena a Promessa de conexão
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Em produção, cria uma nova conexão para cada Serverless Function (Vercel)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporta a Promessa de Cliente para ser usada nos Server Components e Rotas de API
export default clientPromise;
