


import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import uniqid from 'uniqid';
// require('dotenv').config(env.NEXT_PUBLIC_PATH)
//require('dotenv').config({path: '/Users/samuelkawuma/Library/Mobile Documents/com~apple~CloudDocs/food-ordering-app/src/.env' })
export async function POST(req) {
  const data =  await req.formData();
  if (data.get('file')) {
    // upload the file
    const file = data.get('file');

    const s3Client = new S3Client({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      },
    });

    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uniqid() + '.' + ext;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const bucket = 'lexington-pizza';
    await s3Client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: newFileName,
      ACL: 'public-read',
      ContentType: file.type,
      Body: buffer,
    }));


    // const link = 'https://'+bucket+'.s3.amazonaws.com/'+newFileName;
    const link ='https://'+ bucket+'.s3.amazonaws.com/'+newFileName;
    return Response.json(link);
  }
  return Response.json(true);
}