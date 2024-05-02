import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

type registerInfo = {
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  //get the request body
  const body: registerInfo = await request.json();
  const { email, password } = body;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 8
  ) {
    new NextResponse(
      JSON.stringify({
        message:
          'Invalid input - password should also be at least 8 characters long.',
      }),

      {
        status: 422,
      }
    );
  }

  const client = await connectToDatabase();
  const db = client.db();
  //Check if user has existed
  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    client.close();

    return new NextResponse(
      JSON.stringify({ message: 'User Already in DB!' }),
      {
        status: 422,
      }
    );
  } else {
    const hashedPassword = await hashPassword(password);
    const result = await db
      .collection('users')
      .insertOne({ email: email, password: hashedPassword });

    client.close();
    return new NextResponse(
      JSON.stringify({ message: 'Created user!', data: result }),
      {
        status: 201,
      }
    );
  }
}
