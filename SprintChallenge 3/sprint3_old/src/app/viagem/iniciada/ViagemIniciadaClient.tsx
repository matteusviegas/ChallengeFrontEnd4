'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ViagemIniciada = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origem = searchParams.get('origem');
  const destino = searchParams.get('destino');

  const [tempoRestante, setTempoRestante] = useState<number | null>(null);
  const [duracaoTotal, setDuracaoTotal] = useState<number | null>(null);
  const [erro, setErro] = useState('');
  const [chegada, setChegada] = useState<string | null>(null);

  // Simula a chamada à API para pegar a duração da viagem
  useEffect(() => {
    if (!origem || !destino) {
      setErro('Origem ou destino inválido.');
      return;
    }

    const fetchDados = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/mapa/linha9?origem=${origem}&destino=${destino}`);
        const data = await res.json();
        const duracao = data.duracao ?? 30; // fallback: 30 segundos
        setDuracaoTotal(duracao);
        setTempoRestante(duracao);

        // calcula horário estimado de chegada
        const horarioChegada = new Date(Date.now() + duracao * 1000);
        setChegada(horarioChegada.toLocaleTimeString());
      } catch (err) {
        setErro('Erro ao buscar dados da viagem.');
      }
    };

    fetchDados();
  }, [origem, destino]);

  // cronômetro
  useEffect(() => {
    if (tempoRestante === null || tempoRestante <= 0) return;

    const timer = setInterval(() => {
      setTempoRestante((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [tempoRestante]);

  // redireciona quando o tempo chega a 0
  useEffect(() => {
    if (tempoRestante === 0) {
      setTimeout(() => {
        router.push('/viagem/inicio');
      }, 2000);
    }
  }, [tempoRestante, router]);

  const porcentagem = duracaoTotal
    ? Math.round(((duracaoTotal - (tempoRestante ?? 0)) / duracaoTotal) * 100)
    : 0;

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Viagem em Andamento</h1>

      {erro ? (
        <p className="text-red-600">{erro}</p>
      ) : (
        <>
          <p className="mb-2">De <strong>{origem}</strong> para <strong>{destino}</strong></p>
          <p className="mb-2">Tempo restante: <strong>{tempoRestante}s</strong></p>
          <p className="mb-2">Chegada prevista às: <strong>{chegada}</strong></p>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-4 mt-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${porcentagem}%` }}
            ></div>
          </div>
          <p className="mt-2">{porcentagem}% concluído</p>
          {tempoRestante === 0 && <p className="mt-4 text-green-600 font-semibold">Viagem concluída! Redirecionando...</p>}
        </>
      )}
    </div>
  );
};

export default ViagemIniciada;
