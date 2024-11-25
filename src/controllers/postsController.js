import {getTodosPosts, criarPost} from "../models/postsModels.js";


export async function listarPosts (req, res){
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res){
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);

    }
    catch(erro){
        console.log(erro.message);
        res.status(500).json({message: "Erro ao criar post"});
    }
    
}

