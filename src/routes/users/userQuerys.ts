import sql from '../../database/ts/db' // este es el archivo donde exportaste la conexión

export const insertUser = async () => {
  const newUser = await sql`
    INSERT INTO users (
      id, full_name, email, password_hash, phone, location, photo_url,
      biography, created_at, updated_at
    ) VALUES (
      ${crypto.randomUUID()},
      ${'Jefry Astacio'},
      ${'jasbootstudios@gmail.com'},
      ${'0ch1n@gu@01'},
      ${'8090000000'},
      ${'Santo Domingo'},
      ${'https://cdn.miservidor.com/foto.jpg'},
      ${'Músico profesional dominicano especializado en tambora'},
      NOW(),
      NOW()
    )
    RETURNING *
  `;
  if(!newUser){
    return "Algo salio mal";
  }
  console.log(newUser)
  return newUser;
    
}
