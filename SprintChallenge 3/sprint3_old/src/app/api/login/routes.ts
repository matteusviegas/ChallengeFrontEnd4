import oracledb from 'oracledb';

const connectionConfig = {
  user: 'seu_usuario',
  password: 'sua_senha',
  connectString: 'localhost:1521/oracledb',

};

async function connectToDb() {
  try {
    const connection = await oracledb.getConnection(connectionConfig);
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    throw new Error('Falha na conexão com o banco de dados');
  }
}

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export async function POST(request: { json: () => PromiseLike<{ email: string; senha: string }> | { email: string; senha: string } }) {
  try {
    const { email, senha } = await request.json();

    const connection = await connectToDb();

    const result = await connection.execute(
      'SELECT id, nome, email, senha FROM usuarios WHERE email = :email',
      [email]
    );

    if (!result.rows || result.rows.length === 0) {
      connection.close();
      return new Response(
        JSON.stringify({ error: 'Usuário ou senha incorretos!' }),
        { status: 400 }
      );
    }

    const user = result.rows[0] as [number, string, string, string];

    if (senha !== user[3]) {
      connection.close();
      return new Response(
        JSON.stringify({ error: 'Usuário ou senha incorretos!' }),
        { status: 400 }
      );
    }

    connection.close();

    return new Response(
      JSON.stringify({
        user: {
          id: user[0],
          nome: user[1],
          email: user[2],
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao realizar login.' }),
      { status: 500 }
    );
  }
}
