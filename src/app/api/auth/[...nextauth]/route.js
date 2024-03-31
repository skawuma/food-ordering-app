import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import {User} from '@/app/models/User';
import bcrypt from "bcrypt"
import * as mongoose from "mongoose";


const handler = NextAuth({

  secret :process.env['NEXT_PUBLIC_SECRET']="tQNdHBmZB611JnHvyt76q2qRBYCQSv6b",
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
              username: { label: "Email", type: "email", placeholder: "test@example.com" },
              password: { label: "Password", type: "password" },
          },
          async authorize(credentials, req) {
         
            const email = credentials?.email;
            const password = credentials?.password;
    
            mongoose.connect(process.env['NEXT_PUBLIC_MONGODB_URI']="mongodb+srv://christokawuma:iY0txLCzjjyPRfHU@cluster0.tlkp0qb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
            .then(connection => {
                console.log('Connected to MongoDB')
            })
            .catch(error => {
              console.log(error.message)
             });
            const user = await User.findOne({email});
            const passwordOk =  user && bcrypt.compare(password,user.password);
            console.log(user.password);
            console.log(password);
            console.log({passwordOk});
            // console.log({user});
            // If no error and we have user data, return it
            if (passwordOk) {
              return user;
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
      ],
});

export { handler as GET, handler as POST }