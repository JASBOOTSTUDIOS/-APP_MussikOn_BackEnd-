import  express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
// import swaggerJsdoc from 'swagger-jsdoc';
import {swaggerSpec} from './src/utils/swaggerDoc/swagger';
import router from './src/routes/users/usersRoutes';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users',router);

app.get('/', (req:Request, res:Response)=>{
    res.send(`<h1>Bienvenidos a APP MussikOn.</h1>`);
    return;
})

// ************** Documentacion de Swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.SERVER_PORT;

app.listen(port, ()=>{
    console.info(`Servidor Corriendo en http://localhost:${port}`);
    console.info(`Documentación con swagger Corriendo en http://localhost:${port}/api-docs`);
});