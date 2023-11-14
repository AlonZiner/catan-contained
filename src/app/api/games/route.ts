import { NextRequest, NextResponse } from "next/server";
import { firestore } from '@/firebase'
import Game from '@/types/Game';

// GET /api/posts
export async function GET() {
    const snapshot: any = await firestore.collection('games').get();
    const games = snapshot.docs.map((doc: any) => {
        const { date } = doc.data();
        return {
            id: doc.id,
            date: date
        }
    })
    return NextResponse.json({ games })
}

// POST /api/posts
export async function POST(request: NextRequest) {
    const game: Game = await request.json();
    return NextResponse.json({ post: game })
}