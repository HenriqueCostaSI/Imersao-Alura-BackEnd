import express from "express";
import { listarPosts } from "../controllers/postsController.js";
const routes = (app) => {
    app.use(express.json());// 

  // Define uma rota GET na URL "/posts".
  app.get("/posts", listarPosts);
};

export default routes;
