import { connectToAWS } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(request: NextRequest) {
  const client = await connectToAWS();

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: 'original name',
    Body: 'file',
    ContentType: 'image',
  };

  const command = new PutObjectCommand(params);
  const result = await client.send(command);

  return new NextResponse(JSON.stringify({ message: 'Upload Image' }), {
    status: 201,
  });
}

export async function GET() {
  const client = await connectToAWS();

  const getObjectParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: 'post image name',
  };

  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });

  return new NextResponse(JSON.stringify({ message: 'Get Image!' }), {
    status: 201,
  });
}
