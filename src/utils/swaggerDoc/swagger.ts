import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info:{
            title: 'APP MussikOn Backend',
            version:'1.0.0',
            description:'Documentacion de la API APP MussikOn con aswagger',
        },
        servers:[{
            url:'http:192.168.55.28:3000',
            description:'Documentación de la API APP MussikOn',
        }],
    },
    apis:['../**/*.ts'] // Este es quie busca los archivos que tienen los comentarios que usa swagger para renderizar la documebtacio de la api.
};

export const swaggerSpec = swaggerJSDoc(options);