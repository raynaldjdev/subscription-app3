import express from 'express'
import authRoutes from "./routes/auth"


const app = express();

app.use(express.json())
app.use("/auth", authRoutes)
app.listen(8080, ()=>{
    console.log('listening on port 8080 ')
})