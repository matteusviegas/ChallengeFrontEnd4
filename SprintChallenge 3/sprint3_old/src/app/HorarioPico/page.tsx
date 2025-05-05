'use client'
import React, { useEffect, useState } from 'react';

type Fluxo = {
  estacao: string;
  horario: string;
  passageiros: number;
};

const estacoes = [
  'Osasco', 'Pinheiros', 'Luz', 'Fradique Coutinho', 'Itapevi',
  'Presidente Altino', 'Ceasa', 'Villa-Lobos–Jaguaré', 'Cidade Universitária',
  'Hebraica–Rebouças', 'Cidade Jardim', 'Vila Olímpia', 'Berrini',
  'Morumbi', 'Granja Julieta', 'Santo Amaro', 'Socorro', 'Jurubatuba',
  'Autódromo', 'Interlagos', 'Grajaú', 'República', 'Paulista', 'Consolação',
  'Fradique Coutinho', 'Faria Lima', 'Pinheiros', 'Butantã', 'São Paulo–Morumbi',
  'Vila Sônia', 'Júlio Prestes', 'Palmeiras–Barra Funda', 'Lapa',
  'Domingos de Moraes', 'Imperatriz Leopoldina', 'Comandante Sampaio', 'Quitaúna',
  'General Miguel Costa', 'Carapicuíba', 'Santa Terezinha', 'Antonio João',
  'Barueri', 'Jardim Belval', 'Jardim Silveira', 'Jandira', 'Sagrado Coração'
];

const PrevisaoPicoAuto = () => {
  const [dados, setDados] = useState<Fluxo[]>([]);
  const [dadosOcultos, setDadosOcultos] = useState<Fluxo[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dadosAntigos, setDadosAntigos] = useState<Fluxo[]>([]);

  const obterTodosFluxos = async () => {
    try {
      const promessas = estacoes.map(async (estacao) => {
        const response = await fetch(`http://localhost:8080/api/previsao?estacao=${estacao}&horario=08:00`);

        if (!response.ok) {
          console.error(`Erro ao buscar dados para ${estacao}: ${response.status}`);
          return null;
        }

        const texto = await response.text();
        if (!texto) {
          console.error(`Resposta vazia para ${estacao}`);
          return null;
        }

        try {
          const data = JSON.parse(texto);
          if (data.passageiros > 0) {
            return data;
          }
          return null;
        } catch (e) {
          console.error(`Erro ao parsear JSON para ${estacao}: ${e}`);
          return null;
        }
      });

      const resultados = await Promise.all(promessas);
      const fluxosFiltrados = resultados.filter((fluxo) => fluxo !== null) as Fluxo[];

      const metade = Math.ceil(fluxosFiltrados.length / 2);
      setDados(fluxosFiltrados.slice(0, metade));
      setDadosOcultos(fluxosFiltrados.slice(metade));
      setDadosAntigos(fluxosFiltrados.slice(0, metade));
    } catch (error) {
      console.error('Erro ao buscar previsões:', error);
    }
  };

  useEffect(() => {
    obterTodosFluxos();
    const intervalo = setInterval(() => {
      if (!isTransitioning && dados.length > 0 && dadosOcultos.length > 0) {
        setIsTransitioning(true);

        const novasVisiveis = [...dados];
        const novasOcultas = [...dadosOcultos];

        const quantidadeTrocas = Math.floor(Math.random() * 2) + 1;

        for (let i = 0; i < quantidadeTrocas; i++) {
          if (novasOcultas.length === 0 || novasVisiveis.length === 0) break;

          const idxOculto = Math.floor(Math.random() * novasOcultas.length);
          const novaEstacao = novasOcultas.splice(idxOculto, 1)[0];

          const idxVisivel = Math.floor(Math.random() * novasVisiveis.length);
          const antigaEstacao = novasVisiveis[idxVisivel];

          novasVisiveis[idxVisivel] = novaEstacao;
          novasOcultas.push(antigaEstacao);
        }

        setDadosAntigos(dados);
        setDados(novasVisiveis);
        setDadosOcultos(novasOcultas);

        setTimeout(() => setIsTransitioning(false), 1000);
      }
    }, 3000); 

    return () => clearInterval(intervalo);
  }, [dados, dadosOcultos, isTransitioning]);

  const compararDados = (dadosNovos: Fluxo[], dadosAntigos: Fluxo[]) => {
    return dadosNovos.map((fluxo, index) => {
      const foiAlterado =
        fluxo.estacao !== dadosAntigos[index]?.estacao ||
        fluxo.passageiros !== dadosAntigos[index]?.passageiros;
      return {
        ...fluxo,
        foiAlterado
      };
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-6">Previsão Geral de Pico</h1>

      {dados.length === 0 ? (
        <p className="text-center">Carregando dados...</p>
      ) : (
        <div className="space-y-4">
          {compararDados(dados, dadosAntigos).map((fluxo) => (
            <div
              key={fluxo.estacao}
              className={`transition-all duration-1000 transform ${fluxo.foiAlterado ? 'scale-110 opacity-100' : ''} p-4 border rounded shadow`}
              style={{ transition: 'transform 0.5s ease, opacity 0.5s ease' }}
            >
              <h2 className="text-xl font-semibold mb-2">{fluxo.estacao}</h2>
              <p><strong>Horário:</strong> {fluxo.horario}</p>
              <p><strong>Passageiros:</strong> {fluxo.passageiros}</p>
              <p>
                <strong>Status:</strong>{' '}
                {fluxo.passageiros > 80
                  ? 'Atenção: Fluxo Alto!'
                  : fluxo.passageiros <= 40
                    ? 'Fluxo Baixo'
                    : 'Operando normalmente'}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="hidden">
        {dadosOcultos.map((fluxo) => (
          <div key={fluxo.estacao} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{fluxo.estacao}</h2>
            <p><strong>Horário:</strong> {fluxo.horario}</p>
            <p><strong>Passageiros:</strong> {fluxo.passageiros}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevisaoPicoAuto;
