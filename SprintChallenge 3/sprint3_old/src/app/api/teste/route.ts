// app/api/teste/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(JSON.stringify({ mensagem: 'Funcionando!' }), {
    status: 200,
  });
}
