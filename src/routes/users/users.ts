// routes/users.ts
import express, {Request, Response} from 'express';
import { supabase } from '../../database/ts/supabese';
import sql from '../../database/ts/db';
import { insertUser } from './userQuerys';

const router = express.Router();

router.get('/', async (req:Request, res:Response) => {

// const newUser = await insertUser();
const users = await sql`SELECT * FROM users`;
// console.info(newUser);
console.log(users);

  // const { data, error } = await supabase.from('users').select('*');

  // if (!newUser){res.status(500).json({ error: "Ha Abido un problema" });return;};
  // res.json(newUser);
  if (!users){res.status(500).json({ error: "Ha Abido un problema" });return;};
  res.json(users);
});

export default router;
