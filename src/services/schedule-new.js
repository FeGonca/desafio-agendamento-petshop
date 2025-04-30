import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, tutor, pet, phone, desc, date, time }) {
    try { 
        // Faz requisição para enviar os dados
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, tutor, pet, phone, desc, date, time })
        })

        alert("Agedamento realizando com sucesso!")
    } catch (error) {
        console.log(error);
        
    }
}