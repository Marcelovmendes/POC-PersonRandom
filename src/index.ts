import express from "express"
import personRouter from "routes/person.routes";
import dotenv from "dotenv";


const app = express();
dotenv.config()
app.get("/health", (req, res) => res.sendStatus(200))
app.use(personRouter)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is up and running or port: ${port}`);
  })