'use client';

import React, { useEffect, useState } from 'react';

type Viagem = {
  id: number;
  estacaoOrigem: string;
  estacaoDestino: string;
  inicio: string;
  fim: string;
  duracao: number;
};

const RelatorioViagens = () => {
  const [viagens, setViagens] = useState<Viagem[]>([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false); // Estado para controle de carregamento

  const fetchViagens = async () => {
    setCarregando(true); // Inicia o carregamento
    try {
      const userId = 162;
      const userNome = 'Fulano';
      const encodedNome = encodeURIComponent(userNome);
      const res = await fetch(`http://localhost:8080/relatorio/usuario/${userId}?usuario=${encodedNome}`);

      if (!res.ok) throw new Error('Erro ao buscar o relatório.');
      const data = await res.json();
      setViagens(data);
    } catch (err) {
      setErro('Erro ao carregar viagens.');
    } finally {
      setCarregando(false); // Finaliza o carregamento
    }
  };

  // Isso será executado uma vez, quando a página for carregada
  useEffect(() => {
    fetchViagens();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Relatório de Viagens</h1>
      {erro && <p className="text-red-500">{erro}</p>}
      {!erro && viagens.length === 0 && <p>Nenhuma viagem encontrada.</p>}
      
      {/* Tabela de Viagens */}
      {viagens.length > 0 && (
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th>Origem</th>
              <th>Destino</th>
              <th>Início</th>
              <th>Fim</th>
              <th>Duração (s)</th>
            </tr>
          </thead>
          <tbody>
            {viagens.map((v) => (
              <tr key={v.id} className="border-t">
                <td>{v.estacaoOrigem}</td>
                <td>{v.estacaoDestino}</td>
                <td>{new Date(v.inicio).toLocaleTimeString()}</td>
                <td>{new Date(v.fim).toLocaleTimeString()}</td>
                <td>{v.duracao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Botão para fazer a requisição manualmente */}
      <button
        onClick={fetchViagens} // Chama a função de requisição quando clicado
        disabled={carregando} // Desabilita o botão enquanto a requisição está em andamento
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {carregando ? 'Carregando...' : 'Carregar Relatório'}
      </button>
    </div>
  );
};

export default RelatorioViagens;
