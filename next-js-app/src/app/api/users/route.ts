import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return NextResponse.json('no userId passed', { status: 400 });
  }

  try {
    // THIS IS WHERE DATBASE LOGIC WOULD GO PASS IN userId
    const data = {};
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error('Server error while getting users', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
