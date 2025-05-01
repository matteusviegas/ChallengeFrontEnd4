import oracledb from 'oracledb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const connectionConfig = {
  user: 'FIAP',
  password: 'fiap25',
  connectString: 'localhost:1521/xe',
};

async function connectToDb() {
  return await oracledb.getConnection(connectionConfig);
}

export async function POST(request: Request) {
  let connection;
  try {
    const { nome, email, senha } = await request.json();

    connection = await connectToDb();

    const result = await connection.execute(
      `SELECT COUNT(*) AS TOTAL FROM USUARIO_CHALLENGE WHERE EMAIL = :email`,
      { email },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const count = result.rows?.[0]?.TOTAL || 0;

    if (count > 0) {
      return new NextResponse(
        JSON.stringify({ error: 'Email já cadastrado.' }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await connection.execute(
      `INSERT INTO USUARIO_CHALLENGE (ID_USUARIO, NOME, EMAIL, SENHA)
       VALUES (GERADOR_ID_CHALL.NEXTVAL, :nome, :email, :senha)`,
      {
        nome,
        email,
        senha: hashedPassword,
      },
      { autoCommit: true }
    );

    return new NextResponse(
      JSON.stringify({ success: 'Usuário cadastrado com sucesso!' }),
      { status: 200 }
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Erro ao cadastrar usuário.';
    return new NextResponse(
      JSON.stringify({ error: msg }),
      { status: 500 }
    );
  } finally {
    if (connection) await connection.close();
  }
}
