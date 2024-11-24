// Importa o framework Express, que facilita a criação de servidores web.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
  console.log("Servidor executando na porta http://localhost:3000");
});





/**
 * The function "buscarPostPorID" searches for a post by its ID within an array of posts.
 * @param id - The `buscarPostPorID` function takes an `id` parameter as input. This function searches
 * for a post in an array of posts based on the provided `id`. It uses the `findIndex` method to find
 * the index of the post in the array whose `id` matches the `
 * @returns The `buscarPostPorID` function is returning the index of the post in the `posts` array that
 * matches the given `id`. If no post with the specified `id` is found, it will return -1.
 */
/* function buscarPostPorID(id) {
  return posts.findIndex((element) => {
    return element.id === Number(id);
  });
} */
