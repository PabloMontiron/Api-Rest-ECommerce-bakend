import { PrismaClient } from '@prisma/client';
// libreia oficial de postgresql pkg 
import pkg from 'pg';
// de todo lo que trae pkg se importa unicamente { Pool }
const { Pool } = pkg;
// se importa el traductor oficial para comunicarse con 'pg'
import { PrismaPg } from '@prisma/adapter-pg';
// 

// 1. Se crea la conexion a la BD // opcion descartada por falla en el analisis de url al conectar
//const conectionString = process.env.DATABASE_URL;

// se inicializa un pool de conexiones (10 simulatenas max). pool representa una conexion fisica(pero en grupo)
//const pool = new Pool({ conectionString }); // en vez de pasar la const defino pool de form manula

const pool = new Pool({ 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
 });

// 2. Se envuelve (se entrega) esa conexion al traductor de prisma ('PrismaPg')
const adapter = new PrismaPg(pool);

// 3. Se le pasa el adapter al constuctor
const prisma = new PrismaClient({ adapter })

export default prisma;
