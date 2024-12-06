import express from "express";
import prisma from "./database";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSPrisma from "@adminjs/prisma";

const app = express();

// Registro do adaptador do Prisma
AdminJS.registerAdapter(AdminJSPrisma);

// Configuração do AdminJS
const adminJs = new AdminJS({
  resources: [
    { resource: prisma.user }, // Adicione seu modelo aqui
    // Adicione outros modelos conforme necessário
  ],
  rootPath: '/admin',
});

// Criação do router do AdminJS
const adminRouter = AdminJSExpress.buildRouter(adminJs);

// Middleware para o AdminJS
app.use(adminJs.options.rootPath, adminRouter);

// Conexão com o banco de dados e inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("DB connection successful.");
  } catch (error) {
    console.error("DB connection failed: ", error);
  }

  console.log(`Server started successfully at port ${PORT}`);
});