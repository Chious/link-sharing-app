import { NextResponse, NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/db';

type UserInfo = {
  user_id: string;
};

export async function POST(req: NextRequest) {
  const body: UserInfo = await req.json();
  const { user_id } = body;

  if (user_id) {
    //if next-auth is authorized, fetch user's data from mongodb which collection name is 'links'
    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db
      .collection('link')
      .findOne({ user_id: user_id });

    if (existingUser) {
      client.close();
      return new NextResponse(JSON.stringify(existingUser), {
        status: 200,
      });
    } else {
      client.close();
      return new NextResponse(JSON.stringify({ message: 'User No Found!' }), {
        status: 401,
      });
    }
  }

  return new NextResponse(JSON.stringify({ message: 'Invalid Input!' }), {
    status: 422,
  });
}

type PatchData = {
  user_id: string;
  first_name?: string;
  last_name?: string;
  image?: string;
  links?: [];
  slug?: string;
};

export async function PATCH(req: NextRequest) {
  const body: PatchData = await req.json();
  const { user_id, first_name, last_name, image, links } = body;

  //check if body is valid to PatchData
  if (body.user_id) {
    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db
      .collection('link')
      .findOne({ user_id: user_id });

    if (existingUser) {
    } else {
      return new NextResponse(JSON.stringify({ message: 'User No Found!' }), {
        status: 401,
      });
    }
  }

  return new NextResponse(JSON.stringify({ message: 'Invalid Input!' }), {
    status: 422,
  });
}
