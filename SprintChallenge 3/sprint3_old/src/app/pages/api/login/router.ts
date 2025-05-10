import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '../../../lib/db';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, senha } = body;

  if (!email || !senha) {
    return NextResponse.json({ error: 'E-mail e senha são obrigatórios.' }, { status: 400 });
  }

  try {
    const connection = await getConnection();
    const result = await connection.execute(
      'SELECT * FROM USUARIOS WHERE EMAIL = :email AND SENHA = :senha',
      [email, senha]
    );
    await connection.close();

    if (result.rows.length > 0) {
      const user = result.rows[0];
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Usuário ou senha inválidos.' }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Erro ao conectar ao banco.' }, { status: 500 });
  }
}
