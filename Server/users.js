import express from "express";
import users from "./data/Users.js"; // Você precisará criar um arquivo Users.js com a lista de usuários e suas informações

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Verifique o email e a senha no seu array de usuários (users) ou no banco de dados
  const user = users.find((user) => user.email === email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  // Se as credenciais forem válidas, você pode gerar um token de autenticação usando jsonwebtoken
  const token = jwt.sign({ id: user._id, email: user.email }, "seuSegredoAqui", {
    expiresIn: "1h", // Defina o tempo de validade do token conforme necessário
  });

  res.json({ message: "Login bem-sucedido", token });
});

router.get("/profile", (req, res) => {
  // Você pode usar um middleware aqui para verificar o token e autenticar o usuário antes de retornar os dados do perfil
  res.json({ message: "Perfil do usuário" });
});

export default router;
