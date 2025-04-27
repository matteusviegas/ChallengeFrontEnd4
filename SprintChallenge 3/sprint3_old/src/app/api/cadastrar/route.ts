import oracledb from 'oracledb';

const connectionConfig = {
  user: 'seu_usuario',
  password: 'sua_senha',
  connectString: 'host:porta/SID',
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

export async function POST(request: { json: () => PromiseLike<{ nome: any; email: any; senha: any; }> | { nome: any; email: any; senha: any; }; }) {
  try {
    const { nome, email, senha } = await request.json();

    const connection = await connectToDb();
    const result = await connection.execute(
      'SELECT COUNT(*) AS count FROM usuarios WHERE email = :email',
      [email]
    );

    if (result.rows && result.rows[0] && result.rows[0][0] > 0) {
      return new Response(
        JSON.stringify({ error: 'Email já cadastrado.' }),
        { status: 400 }
      );
    }

    await connection.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)',
      [nome, email, senha],
      { autoCommit: true }
    );

    connection.close();

    return new Response(JSON.stringify({ success: 'Usuário cadastrado com sucesso!' }), { status: 200 });
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    return new Response(JSON.stringify({ error: 'Erro ao cadastrar usuário.' }), { status: 500 });
  }
}
