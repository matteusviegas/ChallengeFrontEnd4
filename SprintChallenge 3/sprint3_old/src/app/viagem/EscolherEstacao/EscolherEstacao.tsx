'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const estacoes = [
  'Osasco', 'Quitaúna', 'Carapicuíba', 'Manga', 'Dom Pedro II', 'Vila Progredior',
  'Presidente Altino', 'Pinheiros', 'Granja Julieta', 'Morumbi', 'Butantã',
  'Santo Amaro', 'Brooklin', 'Campo Belo', 'Jabaquara', 'Luz', 'República',
  'Consolação', 'Paulista', 'Faria Lima', 'Barueri', 'Jandira', 'Vargem Grande Paulista',
];

const EscolherViagem = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [carregandoRelatorio, setCarregandoRelatorio] = useState(false);
  const [erro, setErro] = useState('');
  const router = useRouter();

  const iniciarViagem = () => {
    if (!origem || !destino) {
      alert('Por favor, selecione as duas estações.');
      return;
    }
    const params = new URLSearchParams({ origem, destino });
    router.push(`/viagem/iniciada?${params.toString()}`);
      };

  const gerarRelatorioViagem = async () => {
    if (!origem || !destino) {
      alert('Selecione origem e destino antes de gerar o relatório.');
      return;
    }

    setCarregandoRelatorio(true);
    setErro('');

    try {
        const response = await fetch(
          `/api/gerarRelatorio?origem=${encodeURIComponent(origem)}&destino=${encodeURIComponent(destino)}`
        );
      if (!response.ok) throw new Error('Erro ao gerar relatório.');

      const data = await response.json();
      console.log('Relatório gerado:', data);
      alert('Relatório gerado com sucesso!');
    } catch (error) {
      console.error(error);
      setErro('Erro ao gerar o relatório.');
    } finally {
      setCarregandoRelatorio(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-6">Escolha a Viagem</h1>

      <select
        className="mb-4 w-full max-w-md p-3 border border-gray-300 rounded"
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
      >
        <option value="">Selecione a estação de origem</option>
        {estacoes.map((estacao) => (
          <option key={estacao} value={estacao}>
            {estacao}
          </option>
        ))}
      </select>

      <select
        className="mb-6 w-full max-w-md p-3 border border-gray-300 rounded"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
      >
        <option value="">Selecione a estação de destino</option>
        {estacoes.map((estacao) => (
          <option key={estacao} value={estacao}>
            {estacao}
          </option>
        ))}
      </select>

      <button
        onClick={iniciarViagem}
        className="bg-[#42807D] text-white px-6 py-3 rounded-xl"
      >
        Começar Viagem
      </button>

      <button
  onClick={() => router.push('/Relatorio')}
  className="px-6 py-2 bg-[#42807D] mt-4 text-white rounded-lg"
>
  Ver Relatório de Viagens
</button>

      {erro && <p className="mt-4  text-red-600">{erro}</p>}
    </div>
  );
};

export default EscolherViagem;
