const express = require("express");
const app = express();
const cors = require('cors');
// const socket = require('socket.io');
app.use(cors());
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const ClientRoutes = require("./routes/smah.routes");
ClientRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

// const io = socket(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['*'],
//         credentials: true,
//     }
// });