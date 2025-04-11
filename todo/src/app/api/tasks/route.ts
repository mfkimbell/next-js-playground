import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    //DB call
    const data = null;
    if (!data) {
        return NextResponse.json({error: 'no data found'}{status: 404})
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error('Internal server error: Failed database call for Tasks', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();
    const body = res.body;
    //DB CALL WITH BODY
    return NextResponse.json(body, { status: 200 });
  } catch (err) {
    console.error('internal server error: ', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}


