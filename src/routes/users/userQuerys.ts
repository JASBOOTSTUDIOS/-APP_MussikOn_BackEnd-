import sql from '../../database/ts/db' // este es el archivo donde exportaste la conexión

export const insertUser = async () => {
  const newUser = await sql`
    INSERT INTO users (
      id, email, password_hash, phone, location, photo_url,
      biography, created_at, updated_at,name, lastname
    ) VALUES (
      ${crypto.randomUUID()},
      ${'mds.michelleduarteserrano@gmail.com'},
      ${'0ch1n@gu@01'},
      ${'8090000000'},
      ${'Santo Domingo'},
      ${'https://cdn.miservidor.com/foto.jpg'},
      ${'Músico profesional dominicano especializado en tambora'},
      NOW(),
      NOW(),
      ${'Michelle'},
      ${'Duarte Serrano'}
    )
    RETURNING *
  `;
  if(!newUser){
    return "Algo salio mal";
  }
  console.log(newUser)
  return newUser;
    
}

/* 
create table public.contracts (
  id uuid not null,
  event_id uuid null,
  musician_id uuid null,
  confirmed_by_musician boolean null,
  confirmed_by_organizer boolean null,
  payment_status character varying null,
  notes text null,
  created_at timestamp without time zone null,
  constraint contracts_pkey primary key (id),
  constraint contracts_event_id_fkey foreign KEY (event_id) references events (id),
  constraint contracts_musician_id_fkey foreign KEY (musician_id) references users (id)
) TABLESPACE pg_default;

*/