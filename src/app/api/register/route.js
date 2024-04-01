
import mongoose from "mongoose";
import { User } from "../../models/User";


require('dotenv').config(env.NEXT_PUBLIC_PATH)
export  async function POST(req) {
   

    const body = await req.json();
   // const myVal = process.env.NEXT_PUBLIC_MONGODB_URI
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
      console.log(error.message)
     });


    const createdUser = await User.create(body);
    return Response.json(createdUser);
}




