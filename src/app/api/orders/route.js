import {authOptions, isAdmin} from "../../api/auth/[...nextauth]/route";
import {Order} from "../../../app/models/Order";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

export async function GET(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
    console.log('Connected to MongoDB')
    });

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (_id) {
    return Response.json( await Order.findById(_id) );
  }


  if (admin) {
    return Response.json( await Order.find() );
  }

  if (userEmail) {
    return Response.json( await Order.find({userEmail}) );
  }

}