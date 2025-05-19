import cors from 'cors'; 
import dotenv from 'dotenv';
import express from 'express'; 
import path from 'path';
import { createServer } from "http";
import { Server as SocketIOServer } from 'socket.io';


dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express(); 
const server = createServer(app);
const PORT = process.env.PORT || 5000;
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
// app.use("api/users", userRoutes); 

server.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

export { io };