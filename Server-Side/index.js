const express = require("express");
const app = express();
const multer = require("multer");



app.use(express.json());

//CORS
const cors = require("cors");
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true,
}));

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

// // Multer
// const upload = multer({storage})
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./images");},
//     filename: function(req, file, cb){
//         cb(null, 'uploads/${file.originalname}-${Date.now()}.${ext}');
//     }
// })

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});