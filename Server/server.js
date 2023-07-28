import express from "express";
import products from "./data/Products.js";
import usersRouter from "./users.js"; // Substitua "users.js" pelo nome do arquivo que você criou para gerenciar autenticação e usuários

const app = express();

// Configuração para permitir que o Express trabalhe com JSON no corpo da requisição
app.use(express.json());

// Rotas para os produtos
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Rotas de autenticação e usuário
app.use("/api/users", usersRouter); // Substitua "users" pelo caminho desejado para as rotas de autenticação e usuário

app.listen(5000, console.log("O servidor está executando na porta 5000"));
