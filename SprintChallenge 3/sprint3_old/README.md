🚆 Future Station: Sistema de Viagem e Gestão de Fluxo de Passageiros
Bem-vindo ao repositório da Future Station! Este projeto tem como objetivo melhorar o fluxo de passageiros dentro das estações da CCR e fornecer uma experiência interativa e informativa para os usuários do sistema de transporte.

Integrantes do Time:

Matteus Viegas dos Santos - RM 561090

Pedro Henrique de Souza Sena - RM 561178

Sulamita Viegas dos Santos - RM 561089

Obrigado por visitar o nosso repositório!

🚆 Objetivo do Projeto
O Future Station oferece uma interface interativa de viagem para os usuários de transporte público, permitindo calcular e exibir os tempos estimados de viagem entre diferentes estações. Além disso, o sistema registra as viagens realizadas, apresenta relatórios detalhados de fluxo de passageiros, e permite interações com funcionalidades como avisos e sugestões.

Funcionalidades Implementadas:
Iniciar Viagem:

O usuário pode selecionar a estação de origem e destino.

O sistema calcula o tempo estimado de viagem e exibe uma barra de progresso em tempo real, informando quanto falta para a chegada.

Durante a viagem, o usuário vê o tempo restante e o percentual de viagem concluído.

Relatório de Viagens:

O sistema permite que o usuário visualize um histórico de suas viagens anteriores, com detalhes como a estação de origem, destino, tempo de viagem, e hora da viagem.

Horário de Pico e Fluxo de Passageiros:

A funcionalidade de Horário de Pico permite que o usuário visualize o fluxo de passageiros nas estações, incluindo o número de pessoas presentes e o horário específico.

O sistema exibe uma análise de fluxo para diferentes horários do dia, ajudando o usuário a escolher os melhores momentos para viajar.

Mapa da Linha 9:

O mapa interativo da Linha 9 exibe todas as estações dessa linha, destacando a zona sul e o número de passageiros em cada estação.

O mapa fornece uma visão clara da distribuição do fluxo de passageiros nas diferentes estações da linha.

Sistema de Login e Cadastro:

O sistema de login permite que os usuários façam login com suas credenciais e visualizem seu perfil, incluindo a opção de alterar a foto de perfil.

Avisos e Sugestões Interativas:

Página de avisos para exibir notícias relacionadas a mudanças nas linhas de transporte.

Um formulário de feedback para os usuários enviarem sugestões sobre o sistema.

Perfil do Usuário:

O perfil do usuário exibe informações como nome, e-mail e foto, permitindo também que o usuário altere sua foto de perfil e faça logout.

🛠 Roadmap do Projeto
Fase 1: Protótipos e Planejamento:

Criamos wireframes e mockups no Figma.

Definimos a paleta de cores, tipografia e layout do projeto.

Fase 2: Desenvolvimento da Estrutura Básica:

Implementação inicial com HTML e CSS.

Configuração da navegação e layout responsivo.

Fase 3: Implementação com Next.js e TypeScript:

Migração para Next.js e integração com TypeScript.

Implementação de funcionalidades principais, como login e cadastro de usuários.

Criação das funcionalidades de viagem, relatórios e fluxo de passageiros.

🛠 Tecnologias Utilizadas
Next.js: Framework para React utilizado para o desenvolvimento do frontend.

TypeScript: Superset do JavaScript para melhorar a escalabilidade e manutenção do código.

React: Biblioteca JavaScript para construção da interface de usuário.

localStorage: Para armazenamento e recuperação de dados no lado do cliente (como informações de login).

📁 Estrutura de Pastas
/src: Diretório principal do código-fonte.

/pages: Contém todas as páginas do Next.js.

/components: Componentes reutilizáveis no projeto.

/public: Arquivos estáticos como imagens e ícones.

🛠️ Como Rodar o Projeto Localmente
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/ChallengeCCR1/Challenge-FrontEnd.git
Instale as dependências:

bash
Copiar
Editar
npm install
Execute o projeto:

bash
Copiar
Editar
npm run dev
Acesse a aplicação em http://localhost:3000.

🎥 Vídeo de Apresentação
Veja nosso vídeo de apresentação do projeto aqui.

Exemplo de Uso
Faça login no sistema com seu e-mail e senha.

Acesse a página Iniciar Viagem e selecione a estação de origem e destino.

O sistema calculará o tempo estimado de viagem e mostrará um progresso em tempo real.

Quando a viagem for concluída, o sistema exibirá uma mensagem de sucesso.