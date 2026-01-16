import cors from 'cors'; 
import express from 'express'; 
import { createServer } from "http";
import { Server as SocketIOServer } from 'socket.io';

import authRoutes from './routes/auth.routes';

import { config } from './config/env';

const app = express(); 
const server = createServer(app);
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || []; 
const io = new SocketIOServer(server, { //Create a SocketIO server
    cors: {
        origin: allowedOrigins,
        credentials: true  //Allow cookies
    }
});

// Enable CORS for frontend communication 
app.use(cors({
    origin: allowedOrigins,
    credentials: true
})); 

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//Routes
app.use("api/users", authRoutes); 

server.listen(config.port, () => {
    console.log(`✅ Server is running on port ${config.port}`);
});

export { io };