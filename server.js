import express from "express";

console.log(process.env.CONNECTIONSTRING);

const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());//

app.listen(3000, () => {
    console.log("Servidor executando na porta http://localhost:3000");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

/**
 * The function "buscarPostPorID" searches for a post by its ID within an array of posts.
 * @param id - The `buscarPostPorID` function takes an `id` parameter as input. This function searches
 * for a post in an array of posts based on the provided `id`. It uses the `findIndex` method to find
 * the index of the post in the array whose `id` matches the `
 * @returns The `buscarPostPorID` function is returning the index of the post in the `posts` array that
 * matches the given `id`. If no post with the specified `id` is found, it will return -1.
 */
function buscarPostPorID(id) {
    return posts.findIndex((element) => {
        return element.id === Number(id)
    })
}

/* This code snippet is setting up a route in the Express application to handle GET requests to
"/posts/:id". When a GET request is made to this route, the function specified as the second
argument is executed. */
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});