
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express  from 'express';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


app.use('/posts',postRoutes);
const CONNECTION_URL='mongodb+srv://social:<PASSWORD>@cluster0.jgrkfkv.mongodb.net/?retryWrites=true&w=majority';

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=>console.log('Successfully accessed the database')))
    .catch((error)=>console.log("Could not access the database"));



