# 🎵 MusikOn API - BackEnd

Bienvenido al repositorio del **BackEnd de MusikOn**, una plataforma diseñada para conectar organizadores de eventos con músicos, facilitando la contratación, comunicación y gestión de eventos musicales.

## 🚀 Descripción

APP_MussikOn es una solución completa para la industria musical, donde músicos y organizadores pueden interactuar en tiempo real, administrar perfiles, solicitudes de eventos, y mantener una agenda sincronizada.

Este repositorio contiene el servidor desarrollado en **Node.js + Express** con conexión a **Supabase** para autenticación, base de datos y almacenamiento.

## 🧰 Tecnologías principales

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Supabase](https://supabase.com/) (Auth, Database, Storage)
* [Socket.IO](https://socket.io/) (Notificaciones en tiempo real)
* [JWT](https://jwt.io/) (Autenticación segura)
* [Zod](https://zod.dev/) (Validación de datos)
* [dotenv](https://github.com/motdotla/dotenv) (Manejo de variables de entorno)

## 📁 Estructura del proyecto

```bash
/src
├── controllers/    # Lógica de negocio
├── database/       # Lógica de Base de Datos
├── models/         # Estructura de datos y esquemas
├── routes/         # Definición de rutas
├── services/       # Funciones reutilizables (ej. Supabase, JWT)
├── middlewares/    # Validaciones, autenticación, etc.
├── sockets/        # Configuración de socket.io
├── utils/          # Utilidades generales
├── .env            # Claves y data sensible de configuración
└── index.ts        # Punto de entrada principal
```

## ⚙️ Configuración del entorno

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/musikon-backend.git
   cd musikon-backend
   ```

2. Instala las dependencias:

```bash
   npm install
```

3. Crea un archivo `.env` con tus variables de entorno:

```env
   SUPABASE_URL=tu_url_de_supabase
   SUPABASE_KEY=tu_clave_privada
   JWT_SECRET=clave_super_secreta
   PORT=3001
```

4. Inicia el servidor en modo desarrollo:

```bash
   npm run dev
```

## 📊 Endpoints principales

* `POST /auth/register` - Registro de usuarios
* `POST /auth/login` - Inicio de sesión
* `GET /users/profile` - Perfil de usuario (token requerido)
* `POST /events/create` - Crear evento
* `GET /events` - Listado de eventos disponibles

## 🚧 Autenticación

La API utiliza **JWT** para la autenticación. Incluye el token en los headers para acceder a rutas protegidas:

```http
Authorization: Bearer tu_token_jwt
```

## ✨ Contribuir

1. Haz un fork del proyecto
2. Crea una rama nueva 

```bash
git checkout -b feature/nombre-rama
```
3. Realiza tus cambios
4. Haz commit 

```bash 
git commit -am 'Agrega nueva funcionalidad'
```

5. Push a tu fork
```bash
git push origin feature/nombre-rama
```
6. Abre un Pull Request

## 📚 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

> Desarrollado con mucho esfuerzo por el equipo de APP_MussikOn. Para consultas, escríbenos a [appmusikon@gmail.com](mailto:appmusikon@gmail.com)
