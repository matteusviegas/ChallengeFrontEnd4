'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Usuario {
  id: number;
  nome: string;
}

interface Estacao {
  nome: string;
  linha?: string;
}

const ViagemInicio = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [estacoesAPI, setEstacoesAPI] = useState<Estacao[]>([]);
  const [usuarioId, setUsuarioId] = useState('1');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [hpartida, setHpartida] = useState('');
  const [erro, setErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

 const estacoesLinha9Corretas: Estacao[] = [
  { nome: 'Osasco' },
  { nome: 'Presidente Altino' },
  { nome: 'Ceasa' },
  { nome: 'Villa-Lobos–Jaguaré' },
  { nome: 'Cidade Universitária' },
  { nome: 'Pinheiros' },
  { nome: 'Hebraica–Rebouças' },
  { nome: 'Cidade Jardim' },
  { nome: 'Vila Olímpia' },
  { nome: 'Berrini' },
  { nome: 'Morumbi' },
  { nome: 'Granja Julieta' },
  { nome: 'Santo Amaro' },
  { nome: 'Socorro' },
  { nome: 'Jurubatuba–Senac' }, 
  { nome: 'Autódromo' },
  { nome: 'Primavera–Interlagos' },
  { nome: 'Grajaú' },
  { nome: 'Bruno Covas–Mendes–Vila Natal' },
  { nome: 'Varginha' },
];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usuariosResponse, estacoesResponse] = await Promise.all([
          fetch('/api/usuario/todos'),
          fetch('/api/estacao/todas'),
        ]);

        if (!usuariosResponse.ok || !estacoesResponse.ok) {
          throw new Error('Falha ao carregar os dados');
        }

        const usuariosData: Usuario[] = await usuariosResponse.json();
        const estacoesData: Estacao[] = await estacoesResponse.json();

        setUsuarios(usuariosData);
        setEstacoesAPI(estacoesData);

        if (usuariosData.length > 0) {
          setUsuarioId(usuariosData[0].id.toString());
        }

        const agora = new Date();
        const agoraISO = agora.toISOString().slice(0, 16);
        setHpartida(agoraISO);
      } catch (err) {
        setErro(err instanceof Error ? err.message : 'Erro ao carregar dados');
      }
    };

    fetchData();
  }, []);

  const iniciarViagem = async () => {
    if (!origem || !destino) {
      setErro('Preencha todos os campos');
      return;
    }

    if (origem === destino) {
      setErro('A estação de origem não pode ser igual à de destino.');
      return;
    }

    setIsLoading(true);
    setErro('');

    try {
      const resposta = await fetch('/api/viagem/iniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId),
          estacaoOrigemNome: origem,
          estacaoDestinoNome: destino,
          hPartida: hpartida,
        }),
      });

      const json = await resposta.json();

      if (!resposta.ok) {
        throw new Error(json.message || 'Falha ao iniciar a viagem');
      }

      router.push(`/viagem/iniciada?viagemId=${json.id}`);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const estacoesLinha9 = estacoesAPI.length > 0
    ? estacoesAPI.filter((estacao) => estacao.linha === '9 Esmeralda')
    : estacoesLinha9Manual;

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg font-semibold">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Iniciar Viagem</h1>
      {erro && <p className="text-red-500 mb-4">{erro}</p>}

      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1">Estação de Origem</label>
          <select
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione a origem</option>
            {estacoesLinha9.map((estacao) => (
              <option key={estacao.nome} value={estacao.nome}>
                {estacao.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Estação de Destino</label>
          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione o destino</option>
            {estacoesLinha9.map((estacao) => (
              <option key={estacao.nome} value={estacao.nome}>
                {estacao.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={iniciarViagem}
          disabled={isLoading}
          className="w-full bg-[#42807D] text-white py-2 rounded hover:bg-[#365d56]"
        >
          {isLoading ? 'Iniciando...' : 'Iniciar Viagem'}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={() => router.back()}
          className="bg-[#42807D] text-white w-full py-3 mt-6 rounded-[9px] text-base hover:bg-[#365d56]"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ViagemInicio;
