'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type Fluxo = {
  estacao: string;
  horario: string;
  passageiros: number;
};

const estacoesLinha9 = [
  'Osasco', 'Presidente Altino', 'Ceasa', 'Villa-Lobos–Jaguaré', 'Cidade Universitária',
  'Pinheiros', 'Hebraica–Rebouças', 'Cidade Jardim', 'Vila Olímpia', 'Berrini',
  'Morumbi', 'Granja Julieta', 'João Dias', 'Santo Amaro', 'Socorro',
  'Jurubatuba', 'Autódromo', 'Primavera–Interlagos', 'Grajaú',
  'Bruno Covas/Mendes–Vila Natal', 'Varginha'
];

const PrevisaoPicoAuto = () => {
  const [estacaoSelecionada, setEstacaoSelecionada] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [fluxo, setFluxo] = useState<Fluxo | null>(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const obterFluxo = async () => {
    if (!estacaoSelecionada || !horarioSelecionado) {
      setErro('Por favor, selecione uma estação e um horário.');
      setFluxo(null);
      return;
    }

    setCarregando(true);
    setErro('');
    setFluxo(null);

    try {
      const response = await fetch(`http://localhost:8080/api/previsao?estacao=${encodeURIComponent(estacaoSelecionada)}&horario=${encodeURIComponent(horarioSelecionado)}`);
      if (!response.ok) throw new Error();
      const data = await response.json();
      setFluxo(data);
    } catch {
      setErro('Não foi possível obter os dados. Tente novamente mais tarde.');
    } finally {
      setCarregando(false);
    }
  };

  const capacidadeTotal = 1000;

  // Porcentagem de ocupação, mas limitada no máximo a 100%
  const percentualFluxo = fluxo ? Math.min((fluxo.passageiros / capacidadeTotal) * 100, 100) : 0;

  // Classificação baseada na porcentagem calculada
  const fluxoStatus = percentualFluxo <= 40
    ? 'baixo'
    : percentualFluxo <= 80
      ? 'moderado'
      : 'alto';

  return (
    <div className="w-full max-w-md mx-auto px-4 pt-6 pb-28 min-h-screen bg-white relative">
      <h1 className="text-2xl font-bold text-center mb-6">Previsão de Pico</h1>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Estação</label>
        <select
          className="w-full p-3 rounded border border-gray-300"
          value={estacaoSelecionada}
          onChange={(e) => setEstacaoSelecionada(e.target.value)}
        >
          <option value="">Selecione uma estação</option>
          {estacoesLinha9.map((estacao) => (
            <option key={estacao} value={estacao}>
              {estacao}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Horário</label>
        <input
          type="time"
          className="w-full p-3 rounded border border-gray-300"
          value={horarioSelecionado}
          onChange={(e) => setHorarioSelecionado(e.target.value)}
        />
      </div>

      <button
        className="w-full bg-[#42807D] text-white py-3 rounded font-medium hover:bg-[#365d56] transition"
        onClick={obterFluxo}
        disabled={carregando}
      >
        {carregando ? 'Carregando...' : 'Ver Previsão'}
      </button>

      {erro && <p className="mt-4 text-red-600 font-semibold">{erro}</p>}

      {fluxo && (
        <div className="mt-6 p-4 rounded-lg border shadow">
          <h2 className="text-xl font-semibold text-[#42807D] mb-2">{fluxo.estacao}</h2>
          <p className="text-gray-700 mb-1"><span className="font-semibold">Horário:</span> {fluxo.horario}</p>
          <p className="text-gray-700 mb-4"><span className="font-semibold">Passageiros:</span> {fluxo.passageiros}</p>

          <div className="relative w-full bg-gray-200 h-6 rounded-full overflow-hidden mb-3">
            <div
              className={`h-full transition-all duration-500
                ${fluxoStatus === 'alto' ? 'bg-red-500' : fluxoStatus === 'moderado' ? 'bg-yellow-500' : 'bg-green-500'}
              `}
              style={{ width: `${percentualFluxo}%` }}
            ></div>
          </div>

          <div className="text-center text-sm font-medium">
            {fluxo.passageiros === 0 ? (
              <span className="text-gray-500">Sem fluxo registrado para esse horário.</span>
            ) : fluxoStatus === 'alto' ? (
              <span className="text-red-600">Atenção: fluxo muito alto!</span>
            ) : fluxoStatus === 'moderado' ? (
              <span className="text-yellow-600">Fluxo moderado</span>
            ) : (
              <span className="text-green-600">Fluxo tranquilo</span>
            )}
          </div>

          <div className="mt-4 text-center">
            <p className="font-semibold text-xl">{Math.round(percentualFluxo)}%</p>
            <p className="text-gray-600">Capacidade atual de passageiros.</p>
          </div>
        </div>
      )}

      <footer className="fixed bottom-4 left-0 w-full px-4">
        <Link href="/esmeralda">
          <button className="w-full bg-[#42807D] text-white py-3 rounded font-medium hover:bg-[#365d56] transition">
            Voltar
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default PrevisaoPicoAuto;
