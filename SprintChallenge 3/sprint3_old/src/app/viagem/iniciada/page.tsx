'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ViagemIniciadaClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [carregandoRelatorio, setCarregandoRelatorio] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [viagemFinalizada, setViagemFinalizada] = useState(false);

  const origemParam = searchParams.get('origem');
  const destinoParam = searchParams.get('destino');

  const origem = origemParam?.trim() ?? '';
  const destino = destinoParam?.trim() ?? '';

  const duracao = 10;
  const [tempoRestante, setTempoRestante] = useState(duracao);

  useEffect(() => {
    if (!origem || !destino) {
      setTimeout(() => {
        alert('Origem ou destino não definidos. Redirecionando...');
        router.push('/viagem/inicio');
      }, 0);
      return;
    }

    const intervalo = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          setViagemFinalizada(true); // Marca que a viagem acabou
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [origem, destino]);

  useEffect(() => {
    const finalizar = async () => {
      if (viagemFinalizada) {
        await iniciarRelatorio();
        alert('Viagem concluída!');
        router.push('/viagem/inicio');
      }
    };
    finalizar();
  }, [viagemFinalizada]);

  const iniciarRelatorio = async () => {
    try {
      setCarregandoRelatorio(true);

      const usuarioId = 162; // ou pegue isso de um contexto/login
      const origemId = 1; // ID da estação de origem (substituir pelo correto)
      const destinoId = 5; // ID da estação de destino (substituir pelo correto)
      const duracao = 15; // minutos
      const hPartida = new Date().toISOString(); // hora atual
      const estimativaISO = new Date(Date.now() + duracao * 60000).toISOString(); // chegada estimada

      const body = {
        usuarioId,
        estacaoOrigemId: origemId,
        estacaoDestinoId: destinoId,
        hPartida,
        hChegadaEstimada: estimativaISO,
      };

      const res = await fetch('http://localhost:8080/api/viagem/iniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Erro ao salvar viagem: ${errorText}`);
      }
    } catch (err: any) {
      console.error('Erro ao enviar viagem:', err);
      setErro(err.message || 'Erro ao salvar viagem.');
    } finally {
      setCarregandoRelatorio(false);
    }
  };

  const horarioAtual = new Date();
  const horarioChegada = new Date(horarioAtual.getTime() + tempoRestante * 1000);
  const horaChegadaFormatada = horarioChegada.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const porcentagem = ((duracao - tempoRestante) / duracao) * 100;

  const cancelarViagem = () => {
    alert('Viagem cancelada.');
    router.push('/viagem/EscolherEstacao');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-white">
      <h1 className="text-xl font-bold">
        Viajando de {origem || '...'} para {destino || '...'}
      </h1>

      <div className="w-64 h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 transition-all duration-1000"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>

      <p>Tempo restante: {tempoRestante}s</p>
      <p>Chegada prevista: {horaChegadaFormatada}</p>

      {erro && <p className="text-red-500">{erro}</p>}
      {carregandoRelatorio && <p className="text-gray-600">Salvando viagem...</p>}

      <button
        onClick={cancelarViagem}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Cancelar Viagem
      </button>
    </div>
  );
};

export default ViagemIniciadaClient;
