import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

export default async function conectarAoBanco(CONNECTIONSTRING) {
    let mongoClient;
    dotenv.config();

    try {
        mongoClient = new MongoClient(CONNECTIONSTRING);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}