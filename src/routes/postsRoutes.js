import express from "express";
import { listarPosts } from "../controllers/postsController.js";
const routes = (app) => {
  // Cria uma instância do servidor Express.
  const app = express();

  // Define uma rota GET na URL "/posts".
  app.get("/posts", listarPosts);
};

export default routes;
