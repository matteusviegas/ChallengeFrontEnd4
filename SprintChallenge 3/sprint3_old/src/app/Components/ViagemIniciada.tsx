'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Link } from 'lucide-react';

interface Usuario {
  nome: string;
}

interface Viagem {
  id: number;
  estacaoOrigem: string;
  estacaoDestino: string;
  hPartida: string;
  hChegadaEstimada: string;
  usuario: Usuario;
}

const ViagemIniciada = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const viagemId = searchParams.get('viagemId');

  const [viagem, setViagem] = useState<Viagem | null>(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchViagem = async () => {
      try {
        const resposta = await fetch(`http://localhost:8080/api/viagem/${viagemId}`);
        if (!resposta.ok) {
          throw new Error('Erro ao carregar dados da viagem');
        }

        const viagemData = await resposta.json();
        setViagem(viagemData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErro(err.message);
        } else {
          setErro('Erro desconhecido');
        }
      }
    };

    if (viagemId) fetchViagem();
  }, [viagemId]);

  if (erro) return <div className="text-red-500">{erro}</div>;
  if (!viagem) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Viagem Iniciada</h1>

      <div className="mb-4 bg-white shadow-md rounded-xl p-6">
        <p><strong>ID da Viagem:</strong> {viagem.id}</p>
        <p><strong>Estação de Origem:</strong> {viagem.estacaoOrigem}</p>
        <p><strong>Estação de Destino:</strong> {viagem.estacaoDestino}</p>
        <p><strong>Hora de Partida:</strong> {new Date(viagem.hPartida).toLocaleTimeString()}</p>
        <p><strong>Hora Estimada de Chegada:</strong> {new Date(viagem.hChegadaEstimada).toLocaleTimeString()}</p>
        <p><strong>Usuário:</strong> {viagem.usuario?.nome || 'Desconhecido'}</p>
      </div>
 <footer className="fixed bottom-4 left-0 w-full px-4">
      <Link href="/pinheiro">
    <button className="bg-[#42807D] text-white w-[99%] py-3 px-21 rounded-[9px] text-base hover:bg-[#365d56] mt-6">
      Voltar
    </button>
  </Link>
      </footer>
    </div>
  );
};

export default ViagemIniciada;
