// src/lib/db/mongodb.ts

import { MongoClient, ServerApiVersion } from "mongodb";

// Garante que a URI e o nome do DB existam nas variáveis de ambiente
if (!process.env.MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!process.env.MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

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

// A lógica singleton impede que muitas conexões sejam criadas no desenvolvimento e produção
if (process.env.NODE_ENV === "development") {
  // Em desenvolvimento, reutilize a conexão globalmente
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Em produção, crie uma nova conexão por requisição (para funcionar com Vercel Serverless)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporta o clientPromise para ser usado nas Rotas de API
export default clientPromise;
