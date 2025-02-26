'use client';

type BotaoProps = {
    cor: string;
    texto: string;
}

const BotaoTopo: React.FC<BotaoProps> = ({ cor = '#42807D', texto = 'Voltar ao Topo' }) => {

    
    const voltarAoTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            style={{
                backgroundColor: cor,
                padding: '20px 130px',
                margin: '20px',
                fontSize: '1.7rem',
                marginLeft: '40%',
                marginTop: '8%',
                marginBottom: '4%',
                border: 'none',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onClick={voltarAoTopo}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff5e';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = cor; 
            }}
        >
            {texto}
        </button>
    );
}

export default BotaoTopo;
