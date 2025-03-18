'use client'

import { useEffect } from 'react';

const WatsonChat = () => {
  useEffect(() => {
    // Definir as configurações do Watson Assistant
    window.watsonAssistantChatOptions = {
      integrationID: "1383af85-18eb-4c07-b266-6ae288f5d43e", // O ID de integração do Watson Assistant.
      region: "us-south", // A região em que sua integração está hospedada.
      serviceInstanceID: "274c8f20-452b-4e51-90ca-298b8dc583c4", // O ID da instância do serviço.
      onLoad: async (instance) => { await instance.render(); }
    };

    // Carregar o script do Watson Assistant
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    // Limpar o script quando o componente for desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // Este componente não renderiza nada na tela
};

export default WatsonChat;
