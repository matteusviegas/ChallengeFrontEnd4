// /pages/api/register.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ message: 'Faltando dados no corpo da requisição' });
    }

    // Simulando o registro de um novo usuário
    console.log({ nome, email, senha });

    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
