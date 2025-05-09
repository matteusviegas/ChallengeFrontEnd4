'use client';
import React, { useState } from 'react';

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
      if (!response.ok) {
        throw new Error('Erro ao buscar dados.');
      }
      const data = await response.json();
      setFluxo(data);
    } catch (err) {
      setErro('Não foi possível obter os dados. Tente novamente mais tarde.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <h1 style={{ fontSize: '24px', textAlign: 'center', fontWeight: 'bold', marginBottom: '24px' }}>Previsão de Pico por Estação</h1>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Estação:</label>
        <select
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
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

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Horário:</label>
        <input
          type="time"
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          value={horarioSelecionado}
          onChange={(e) => setHorarioSelecionado(e.target.value)}
        />
      </div>

      <button
        style={{
          width: '100%',
          backgroundColor: '#42807D',
          color: '#fff',
          padding: '12px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={obterFluxo}
        disabled={carregando}
      >
        {carregando ? 'Carregando...' : 'Ver Previsão'}
      </button>

      {erro && <p style={{ marginTop: '16px', color: 'red' }}>{erro}</p>}

      {fluxo && (
        <><div style={{ marginTop: '24px', padding: '16px', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{fluxo.estacao}</h2>
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
        </>
        
      )}
    </div>
  );
};

export default PrevisaoPicoAuto;
