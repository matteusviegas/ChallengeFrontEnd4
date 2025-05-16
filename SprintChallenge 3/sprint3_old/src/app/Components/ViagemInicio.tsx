'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ViagemInicio = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [estacoesAPI, setEstacoesAPI] = useState<any[]>([]);
  const [usuarioId, setUsuariosId] = useState('1');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [hpartida, setHpartida] = useState('');
  const [erro, setErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const estacoesLinha9Manual = [
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
    { nome: 'João Dias' },
    { nome: 'Santo Amaro' },
    { nome: 'Socorro' },
    { nome: 'Jurubatuba' },
    { nome: 'Autódromo' },
    { nome: 'Primavera–Interlagos' },
    { nome: 'Grajaú' },
    { nome: 'Bruno Covas/Mendes–Vila Natal' },
    { nome: 'Varginha' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usuariosResponse, estacoesResponse] = await Promise.all([
          fetch('http://localhost:8080/api/usuario/todos'),
          fetch('http://localhost:8080/api/estacao/todas'),
        ]);

        if (!usuariosResponse.ok || !estacoesResponse.ok) {
          throw new Error('Falha ao carregar os dados');
        }

        const usuariosData = await usuariosResponse.json();
        const estacoesData = await estacoesResponse.json();

        setUsuarios(usuariosData);
        setEstacoesAPI(estacoesData);

        if (usuariosData.length > 0) {
          setUsuariosId(usuariosData[0].id.toString());
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
      const resposta = await fetch('http://localhost:8080/api/viagem/iniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId),
          estacaoOrigemNome: origem,
          estacaoDestinoNome: destino,
          hPartida: hpartida,
        }),
      });

      if (!resposta.ok) {
        throw new Error('Falha ao iniciar a viagem');
      }

      const viagemData = await resposta.json();
      router.push(`/viagem/iniciada?viagemId=${viagemData.id}`);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  // Prioriza estações da Linha 9, filtradas da API (fallback para manual)
  const estacoesLinha9 = estacoesAPI.length > 0
    ? estacoesAPI.filter((estacao) => estacao.linha === '9 Esmeralda')
    : estacoesLinha9Manual;

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Iniciar Viagem</h1>
      {erro && <p className="text-red-500">{erro}</p>}

      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1">Estação de Origem</label>
          <select
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione a origem</option>
            {estacoesLinha9.map((estacao, index) => (
              <option key={index} value={estacao.nome}>
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
            {estacoesLinha9.map((estacao, index) => (
              <option key={index} value={estacao.nome}>
                {estacao.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={iniciarViagem}
          disabled={isLoading}
          className="w-full bg-[#42807D] text-white py-2 rounded"
        >
          {isLoading ? 'Iniciando...' : 'Iniciar Viagem'}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={() => router.back()}
          className="bg-[#42807D] text-white w-[100%] py-3 px-23 mt-11 rounded-[9px] text-base hover:bg-[#365d56]"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ViagemInicio;
