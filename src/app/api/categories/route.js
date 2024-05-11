import {isAdmin} from "../../api/auth/[...nextauth]/route"
import { Category } from "../../models/Category";
import mongoose from "mongoose";
export async function POST(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
    console.log('Connected to MongoDB')
    })
    const {name} = await req.json();
    if (await isAdmin()) {
      const categoryDoc = await Category.create({name});
      return Response.json(categoryDoc);
    } else {
      return Response.json({});
    }
  }
  
  export async function PUT(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
    console.log('Connected to MongoDB')
})
    const {_id, name} = await req.json();
    if (await isAdmin()) {
      await Category.updateOne({_id}, {name});
    }
    return Response.json(true);
  }
  
  export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
    console.log('Connected to MongoDB')
})
    return Response.json(
      await Category.find()
    );
  }
  
  export async function DELETE(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    .then(connection => {
    console.log('Connected to MongoDB')
})
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if (await isAdmin()) {
      await Category.deleteOne({_id});
    }
    return Response.json(true);
  }