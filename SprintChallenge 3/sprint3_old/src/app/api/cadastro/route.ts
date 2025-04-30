import oracledb from 'oracledb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const connectionConfig = {
  user: 'fiap',
  password: 'fiap25',
  connectString: 'localhost:1521/xe',
};

async function connectToDb() {
  try {
    return await oracledb.getConnection(connectionConfig);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw new Error('Erro ao conectar ao banco de dados');
  }
}

export async function POST(request: Request) {
  let connection;
  try {
    const { nome, email, senha } = await request.json();
    console.log('Dados recebidos:', nome, email, senha);

    connection = await connectToDb();

    const result = await connection.execute(
      'SELECT COUNT(*) AS total FROM Usuario_Challenge WHERE email = :email',
      [email],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    const count = result.rows && result.rows.length > 0 ? result.rows[0].TOTAL : 0;
    console.log('Resultado da consulta ao banco:', count);

    if (count > 0) {
      return new NextResponse(
        JSON.stringify({ error: 'Email já cadastrado.' }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await connection.execute(
      `INSERT INTO Usuario_Challenge (id_usuario, nome, email, senha)
       VALUES (gerador_id_chall.NEXTVAL, :nome, :email, :senha)`,
      { nome, email, senha: hashedPassword },
      { autoCommit: true }
    );

    return new NextResponse(
      JSON.stringify({ success: 'Usuário cadastrado com sucesso!' }),
      { status: 200 }
    );

  } catch (error) {
    const err = error instanceof Error ? error : new Error('Erro desconhecido');
    console.error('Erro ao cadastrar:', err.message);

    return new NextResponse(
      JSON.stringify({ error: err.message || 'Erro ao cadastrar usuário.' }),
      { status: 500 }
    );
  } finally {
    if (connection) await connection.close();
  }
}

function oDb() {
  throw new Error('Function not implemented.');
}
