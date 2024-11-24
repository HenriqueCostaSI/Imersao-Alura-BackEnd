import getTodosPosts from "../models/postsModels.js";

export async function listarPosts (req, res) {
    // Busca os posts usando a função `getTodosPosts` (supostamente do banco de dados).
    const post = await getTodosPosts();
    // Retorna os posts em formato JSON com o status HTTP 200 (sucesso).
    res.status(200).json(posts);
}