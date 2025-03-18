# Future Station

Bem-vindo ao repositório da Future Station! Este projeto tem como objetivo melhorar o fluxo de pessoas dentro das estações CCR.

## Integrantes do Time

| Nome            | RM        |
|------------------|-----------|
| Matteus Viegas dos Santos | RM 561090  |
| Pedro Henrique de Souza Sena | RM 561178  |
| Sulamita Viegas dos Santos | RM 561089  |


Obrigado por visitar o nosso repositório!







# 🚆 **Sistema de Viagem, Relatório de Percurso e Sistema de Login e Cadastro**

Este projeto tem como objetivo oferecer uma interface de viagem interativa para usuários de transporte público, 
permitindo calcular e exibir os tempos estimados de viagem entre diferentes estações, registrar essas viagens e
exibir um histórico completo das viagens realizadas. Além disso, o projeto implementa um sistema de **login, cadastro, previssao de pico, calcular trajeto de uma linha a outra e avisos**
de usuários utilizando **Next.js** e **TypeScript**.

---




#### **1. Apresentação do Projeto**
Este projeto é um protótipo de um sistema de login e cadastro de usuários, desenvolvido utilizando **Next.js** e **TypeScript**,
com o objetivo de criar uma experiência de usuário fluída e responsiva. O projeto foi desenvolvido ao longo de três sprints,
começando com a prototipação no **Figma** e evoluindo até a implementação das funcionalidades essenciais.

#### **Funcionalidades Implementadas:**
- Sistema de **Login e Cadastro** de usuários.
- **Avisos e Sugestões** interativas com animações usando **Framer Motion**.
- Tela de **feedback** para sugestões enviadas com sucesso.
- **Fluxo de navegação** entre diferentes linhas e estações.
- Funcionalidades de **atualizar página** e **voltar** para o início.
- **Gestão de fluxo de passageiros** para estações e exibição de relatórios.
- **Início de viagem** com cálculo do tempo de percurso entre estações e exibição de progresso durante a viagem.
- **Relatório de Fluxo** com informações detalhadas sobre o movimento de passageiros, principalmente para as estações em horários de pico e fluxo normal.
- Funcionalidade de **acessar o ícone de acessibilidade** e **denunciar** possíveis problemas ou incidentes.
- **Perfil do Usuário**: Exibe informações do usuário e permite a alteração da foto de perfil.

### **2. Roadmap do Projeto**

#### Sprint 1:
- **Protótipos no Figma**: Criamos wireframes iniciais para as telas de **inicio**, **equipe**, **proje**e  **ccr**.
- Definimos as **cores**, **fontes** e o **layout básico** do site.

#### Sprint 2:
- **Implementação HTML/CSS**: O protótipo foi traduzido para **HTML** e **CSS** para criar a estrutura básica do site.
- A **navegação** foi configurada, com links entre as páginas de **Login**, **Cadastro**, **Avisos**, **Sugestões** e **Header**.
- Implementação do **design responsivo** utilizando **media queries** para garantir que o layout fosse adequado para dispositivos móveis, tablets e desktops.
- **Acessibilidade** foi uma prioridade, com o uso de atributos **ARIA** e contraste adequado.
- - A **experiência de usuário** foi projetada para ser **responsiva**, adaptando-se a diferentes tamanhos de tela (mobile, tablet e desktop).


#### Sprint 3:
- **Implementação com Next.js e TypeScript**: Migramos o projeto para **Next.js**, utilizando **TypeScript** para um desenvolvimento mais robusto e escalável.
- **Página de Login**: Criamos a lógica de autenticação no frontend, utilizando o **localStorage** para armazenar e verificar os dados do usuário.
- **Página de Cadastro**: Implementamos a página de cadastro, permitindo que os usuários criem contas com validações de senha e aceitação de termos de uso.
- **Avisos e Sugestões**: Implementamos uma página com a exibição de **notícias** e um formulário de **feedback** para sugestões.
- **Atualizar e Voltar**: Foi implementada a funcionalidade de **atualizar página** e **voltar** ao início para facilitar a navegação do usuário.
- **Gestão de Fluxo de Passageiros**: Adicionamos um sistema de controle de fluxo para as estações de trem,
- simulando fluxo alto e baixo nas horas do dia. A exibição de status da operação foi implementada, incluindo imagens representando o
- fluxo de passageiros. Além disso, foi possível gerar um relatório das condições de fluxo das estações.
- **Iniciar Viagem e Progresso de Viagem**: Criamos uma nova funcionalidade onde o usuário pode selecionar a **origem** e **destino** de sua viagem,
-  e o sistema calcula o tempo de percurso entre essas estações. Durante a viagem, é exibido o progresso, com o tempo decorrido e uma barra de progresso.
-   Ao final da viagem, uma mensagem de sucesso é exibida.

---

## 🛠 **Funcionalidades**

### **Página de Avisos**
- Exibe as últimas notícias relacionadas a mudanças nas linhas de transporte.
- Inclui um modal interativo para mostrar detalhes das notícias.

### **Página de Sugestões**
- Permite que os usuários enviem sugestões para melhoria do sistema.
- Exibe uma mensagem de sucesso quando uma sugestão é enviada com sucesso.

### **Iniciar Viagem**
- O usuário pode selecionar a **estação de origem** e **destino** para iniciar a viagem.
- O tempo de percurso entre as estações é calculado e exibido.
- A viagem é iniciada com uma barra de progresso que mostra o tempo decorrido da viagem em tempo real.

### **Viagem em Andamento**
- Durante a viagem, o sistema simula a passagem do tempo e exibe o progresso da viagem.
- Quando a viagem é concluída, uma mensagem de sucesso é exibida.

### **Gerenciamento de Fluxo de Passageiros**
- O sistema simula o fluxo de passageiros em diferentes horários do dia, classificando-os em **fluxo alto** ou **fluxo baixo**.
- Com base nos fluxos, o sistema altera o **status de operação** (como "Operando normalmente", "Fluxo Alto", ou "Fluxo Baixo") e exibe imagens representativas de acordo com o fluxo.
- O usuário pode visualizar relatórios sobre os fluxos de passageiros, com base nas estações e horários.

### **Relatório de Fluxo**
- O sistema permite a visualização de um **relatório de fluxo de passageiros**, com base nas estações e horários.
- O usuário pode visualizar dados detalhados sobre o fluxo, incluindo imagens representativas de fluxo alto ou baixo nas estações.

### **Ícone de Acessibilidade e Denúncias**
- **Ícone de Acessibilidade**: O usuário pode acessar informações sobre a **acessibilidade** nas estações através de um ícone de acessibilidade,
   localizado no canto superior da página. Esse ícone leva o usuário a uma página com detalhes sobre a acessibilidade nas estações, incluindo rampas,
   elevadores, e outros serviços disponíveis.
  - **Funcionalidade de Denúncia**: Além disso, existe a funcionalidade de **denunciar** problemas nas estações ou no sistema de transporte.
    Ao clicar no ícone de denúncia, o usuário é levado a um formulário onde pode relatar incidentes ou problemas, como atrasos, falhas nas instalações, entre outros.

### **Perfil do Usuário**
- **Exibição do Perfil**: O usuário pode visualizar seu perfil ao clicar no ícone de foto no canto superior da tela. O perfil exibe o nome do usuário, e-mail e foto de perfil.
- **Alteração de Foto de Perfil**: O usuário pode atualizar sua foto de perfil ao clicar no botão de "Alterar Foto de Perfil", que abre um seletor de arquivos.
- **Logout**: O usuário pode se deslogar da aplicação, o que remove os dados do usuário do **localStorage** e o redireciona para a página de login.

---

##  **Pinheiros**
A estação **Pinheiros** é uma das principais estações do sistema de transporte, e sua localização pode ser acessada diretamente no mapa do sistema.
O sistema também permite visualizar o **fluxo de passageiros** específico para Pinheiros, exibindo se está com **fluxo alto** ou **baixo** e suas condições de
operação. O usuário pode acessar os **relatórios de fluxo** detalhados da estação através da interface interativa.

---

## 📁 **Estrutura de Pastas**

A estrutura de pastas do projeto foi organizada para facilitar a manutenção, escalabilidade e compreensão do sistema.
Abaixo está um resumo de como as pastas e arquivos estão distribuídos:



## 📍 **Exemplo de Uso**

1. Faça login no sistema com seu e-mail e senha.
2. Acesse a página "Iniciar Viagem" e selecione a estação de origem e destino.
3. O sistema calculará o tempo estimado de viagem e mostrará um progresso em tempo real.
4. Quando a viagem for concluída, o sistema exibirá uma mensagem de sucesso.


## 🛠️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/ChallengeCCR1/Challenge-FrontEnd.git
Instale as dependências:

bash
Copiar
npm install
Execute o projeto:

bash
Copiar
npm run dev
Acesse a aplicação em http://localhost:3000.

rust
Copiar





   📂 Estrutura de Pastas
/src: Diretório principal do código-fonte.
/pages: Contém todas as páginas do Next.js.
/components: Componentes reutilizáveis no projeto.
/public: Arquivos estáticos como imagens e ícones.

   💻 **Tecnologias Utilizadas**

- **Next.js**: Framework para React utilizado para o desenvolvimento do frontend.
- **TypeScript**: Superset do JavaScript para melhorar a escalabilidade e manutenção do código.
- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **localStorage**: Para armazenamento e recuperação de dados no lado do cliente (como informações de login).



## 🛠️ **Roadmap do Projeto**

### **Fase 1: Protótipos e Planejamento**
- Criamos wireframes e mockups no Figma.
- Definimos a paleta de cores, tipografia e layout.

### **Fase 2: Desenvolvimento da Estrutura Básica**
- Implementação inicial com HTML e CSS.
- Configuração da navegação e layout responsivo.

### **Fase 3: Implementação com Next.js e TypeScript**
- Migração para Next.js e integração com TypeScript.
- Implementação de funcionalidades principais, como login e cadastro de usuários.


# 🎥 **Vídeo de Apresentação**

Veja nosso vídeo de apresentação do projeto  aqui: (https://youtu.be/bZ-KJQPRiGc?si=CKvfrTc_1z6dhBJ2).
