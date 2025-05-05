'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ViagemIniciadaClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origem = searchParams.get('origem');
  const destino = searchParams.get('destino');

  const duracao = 30;
  const [tempoRestante, setTempoRestante] = useState(duracao);
  const [intervaloId, setIntervaloId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!origem || !destino) {
      alert('Origem ou destino não definidos. Redirecionando...');
      router.push('/viagem/inicio');
      return;
    }

    const intervalo = setInterval(() => {
      setTempoRestante((anterior) => {
        if (anterior <= 1) {
          clearInterval(intervalo);
          alert('Viagem concluída!');
          router.push('/viagem/inicio');
          return 0;
        }
        return anterior - 1;
      });
    }, 1000);

    setIntervaloId(intervalo);

    return () => clearInterval(intervalo);
  }, [origem, destino, router]);

  const porcentagem = ((duracao - tempoRestante) / duracao) * 100;

  const horarioAtual = new Date();
  const horarioChegada = new Date(horarioAtual.getTime() + tempoRestante * 1000);
  const horaChegadaFormatada = horarioChegada.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const pararViagem = () => {
    if (intervaloId) clearInterval(intervaloId);
    alert('Viagem cancelada.');
    router.push('/viagem/inicio');
  };

  const escolherOutraEstacao = () => {
    if (intervaloId) clearInterval(intervaloId);
    router.push('/viagem/inicio');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white">
      <h1 className="text-xl font-bold">Viajando de {origem} para {destino}</h1>

      <div className="w-64 h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 transition-all duration-1000"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>

      <p>Tempo restante: {tempoRestante}s</p>
      <p>Chegada prevista: {horaChegadaFormatada}</p>

      <div className="flex space-x-4">
        <button
          onClick={pararViagem}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Parar Viagem
        </button>

        <button
          onClick={escolherOutraEstacao}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Escolher Novas Estações
        </button>
      </div>
    </div>
  );
};

export default ViagemIniciadaClient;
