//Imported required packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const SocketServer = require("./socketServer");
const { ExpressPeerServer } = require("peer");
const path = require("path");
const detailRoutes = require("./routes/detailRouter");

//create express server
const app = express();

app.use(express.json());
app.use(cookieParser());

// Enabled CORS
app.use(cors(
));
// Socket
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  SocketServer(socket);
});

// Create peer server
ExpressPeerServer(http, { path: "/" });

// Routes Configuration
app.use("/api", require("./routes/authRouter"));
app.use("/api", require("./routes/userRouter"));
app.use("/api", require("./routes/postRouter"));
app.use("/api", require("./routes/commentRouter"));
app.use("/api", require("./routes/notifyRouter"));
app.use("/api", require("./routes/messageRouter"));
app.use("/api", require("./routes/bookingRouter"));
app.use("/api", require("./routes/prescriptionRouter"));
app.use("/api", require("./routes/detailRouter"));




//Connect Mongodb Database
const URI = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(
  URI,
  {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);


//serving the frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


// Setup for the server port
const port = process.env.PORT || 5000;

// Starting our express server
http.listen(port, () => {
  console.log(`Open in your browser http://localhost:${port}/`);
});
