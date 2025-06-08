// routes/users.ts
import express, { Request, Response } from "express";
import { supabase } from "../../database/ts/supabese";
import sql from "../../database/ts/db";
import { insertUser } from "./userQuerys";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Gestion de Usuarios
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Obtener todos los Usuarios
 *    tags: [Usuarios]
 *    responses:
 *      200:
 *        description: Lista de todos los usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *      401: 
 *        description: No authorizado
 *          
 *
 */

router.get("/", async (req: Request, res: Response) => {
  // const newUser = await insertUser();
  // console.info(newUser);
  const users = await sql`SELECT * FROM users`;

  // const { data, error } = await supabase.from('users').select('*');

  // if (!newUser){res.status(500).json({ error: "Ha Abido un problema" });return;};
  // res.json(newUser);
  if (!users) {
    res.status(500).json({ error: "Ha Abido un problema" });
    return;
  }
  res.json(users);
});

export default router;
