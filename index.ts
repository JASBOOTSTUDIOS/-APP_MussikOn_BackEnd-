import  express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/users/users';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users',router);

app.get('/', (req:Request, res:Response)=>{
    res.send(`<h1>Bienvenidos a APP MussikOn.</h1>`);
    return;
})

const port = process.env.SERVER_PORT;

app.listen(port, ()=>{
    console.info(`Servidor Corriendo en http://localhost:${port}`);
});