
import mongoose from "mongoose";
import { User } from "../../models/User";



export  async function POST(req) {
   

    const body = await req.json();
   // const myVal = process.env.NEXT_PUBLIC_MONGODB_URI
    mongoose.connect(process.env['NEXT_PUBLIC_MONGODB_URI']="mongodb+srv://christokawuma:iY0txLCzjjyPRfHU@cluster0.tlkp0qb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(connection => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
      console.log(error.message)
     });

//    const  MONGO_URL="mongodb+srv://christokawuma:iY0txLCzjjyPRfHU@cluster0.tlkp0qb.mongodb.net/";
// mongoose.connect(process.env.MONGO_URL);

// await mongoose.connect(mongoDB);
//  mongoose.connect('mongodb+srv://christokawuma:iY0txLCzjjyPRfHU@cluster0.tlkp0qb.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
    const createdUser = await User.create(body);
    return Response.json(createdUser);
}




