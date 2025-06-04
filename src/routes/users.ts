// routes/users.ts
import express, {Request, Response} from 'express';
import { supabase } from '../database/ts/supabese';

const router = express.Router();

router.get('/', async (req:Request, res:Response) => {
  const { data, error } = await supabase.from('users').select('*');

  if (error){res.status(500).json({ error: error.message });return;};
  res.json(data);
});

export default router;
