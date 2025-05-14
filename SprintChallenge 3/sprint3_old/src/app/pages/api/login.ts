// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, email, senha } = req.body;

    // Aqui você pode adicionar lógica para salvar no banco de dados
    // Por enquanto, simule um sucesso:
    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  }

  // Método não permitido
  return res.status(405).json({ error: 'Método não permitido' });
}
