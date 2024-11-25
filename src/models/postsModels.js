import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.CONNECTIONSTRING);

// Função assíncrona que busca todos os posts armazenados no banco de dados.
export async function getTodosPosts() {
    try {
      // Obtém a conexão com o banco de dados "Imersao-insta".
      const db = conexao.db("Imersao-insta");
      // Acessa a coleção "posts" dentro do banco de dados.
      const colecao = db.collection("posts");
      // Retorna todos os documentos da coleção como um array.
      return await colecao.find().toArray();
    } catch (erro) {
      // Exibe um erro no console caso a operação falhe.
      console.error("Erro ao buscar todos os posts", erro);
    }
}

export async function criarPost(novoPost) {
  const db = conexao.db("Imersao-insta");
  const colecao = db.collection("posts");
  return await colecao.insertOne(novoPost);
  try {
    
    } catch (erro) {
      console.error("Erro ao criar post", erro);
    }
}