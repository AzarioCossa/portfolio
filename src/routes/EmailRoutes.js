import EmailController from '../controllers/EmailController';

const configureEmailRoutes = (router) => {

  router.post('/contact', async (req, res) => {
    const formData = req.body;

    const result = await EmailController.handleContactSubmission(formData);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  });

  return router;
};

// Exportamos a função de configuração para ser usada no ficheiro principal do servidor.
// Exemplo de uso num ficheiro server.js:
//
// import express from 'express';
// import configureEmailRoutes from './routes/EmailRoutes';
//
// const app = express();
// app.use(express.json()); // Middleware para ler JSON do body
//
// const emailRouter = express.Router();
// app.use('/api', configureEmailRoutes(emailRouter));
//
// app.listen(3001, () => console.log('Servidor a correr na porta 3001'));

export default configureEmailRoutes;
