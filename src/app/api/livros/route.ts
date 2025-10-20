// src/app/api/livros/route.ts

import { NextResponse } from "next/server";
// Importa o client Promise que criamos em src/lib/db/mongodb.ts
import clientPromise from "@/lib/db/mongodb";
// Importa o ObjectId do MongoDB, útil se você precisar buscar por ID
import { ObjectId } from "mongodb";

// Esta função GET será executada sempre que a URL /api/livros for acessada
export async function GET() {
  try {
    // 1. Conecta ao cliente MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB); // Usa o nome do DB do .env.local

    // 2. Busca todos os documentos na coleção 'livros'
    const livros = await db
      .collection("livros")
      .find({}) // Busca todos os documentos
      .toArray(); // Converte o cursor para um array JavaScript

    // 3. Retorna os dados como resposta JSON
    return NextResponse.json(livros);
  } catch (e) {
    console.error("Erro ao buscar livros do MongoDB:", e);
    // Em caso de erro, retorna um status 500
    return NextResponse.json(
      { error: "Falha ao buscar dados do catálogo" },
      { status: 500 }
    );
  }
}
