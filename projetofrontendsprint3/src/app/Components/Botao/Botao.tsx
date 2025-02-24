'use client';

type BotaoProps = {
    cor: string;
    texto: string;
    onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ cor = 'azul', texto = 'Clique aqui', onClick }) => {
    return (
        <button
            style={{
                backgroundColor: cor,
                padding: '10px 20px',
                border: 'none',
            }}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}

export default Botao;
