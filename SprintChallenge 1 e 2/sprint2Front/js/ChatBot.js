window.watsonAssistantChatOptions = {
    integrationID: "1383af85-18eb-4c07-b266-6ae288f5d43e", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "274c8f20-452b-4e51-90ca-298b8dc583c4", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});