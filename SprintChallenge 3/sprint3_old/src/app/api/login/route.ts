import oracledb from 'oracledb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

// ✅ Modo Thin ativado (sem necessidade do Oracle Instant Client)
oracledb.thin = true;

// ✅ Configurações de conexão
const connectionConfig = {
  user: 'rm561090', // Seu usuário do banco
  password: 'fiap25', // Sua senha
  connectString: 'oracle.fiap.com.br:1521/orcl', // String de conexão
};

// ✅ Função para conectar ao banco
async function connectToDb() {
  try {
    return await oracledb.getConnection(connectionConfig);
  } catch (error: unknown) { // Tratando o erro como `unknown`
    console.error('Erro ao conectar ao banco de dados:', error);
    throw new Error('Erro ao conectar ao banco de dados');
  }
}

// ✅ Endpoint POST para login
export async function POST(request: Request) {
  let connection;
  try {
    const { email, senha } = await request.json();

    connection = await connectToDb();

    // 🔍 Busca o usuário pelo email
    const result = await connection.execute(
      `SELECT senha FROM Usuario_Challenge WHERE email = :email`,
      { email },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    if (!result.rows || result.rows.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'Usuário não encontrado.' }),
        { status: 404 }
      );
    }

    const hashedPassword = result.rows[0].SENHA;

    // 🔐 Compara a senha enviada com a senha do banco
    const isMatch = await bcrypt.compare(senha, hashedPassword);

    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({ error: 'Senha incorreta.' }),
        { status: 401 }
      );
    }

    return new NextResponse(
      JSON.stringify({ success: 'Login bem-sucedido!' }),
      { status: 200 }
    );

  } catch (error: unknown) { // Tratando o erro como `unknown`
    const msg = error instanceof Error ? error.message : 'Erro ao fazer login.';
    console.error('Erro no login:', msg);

    return new NextResponse(
      JSON.stringify({ error: msg }),
      { status: 500 }
    );
  } finally {
    if (connection) await connection.close();
  }
}
  