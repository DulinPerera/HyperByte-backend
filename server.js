import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import restaurantRoutes from "./routes/restaurantsRoutes.js"
import cors from 'cors';


dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.MONGO
).then(()=>{
    console.log('MongoDb is connected')
}).catch((err)=>{
    console.log(err)
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

app.use('/restaurants', restaurantRoutes);
