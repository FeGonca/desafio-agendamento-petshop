"use sttrict"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";


export async function schedulesDay() {
    
    // Obtem o valor do calendário
    const selectedDay = document.getElementById("calendar");
    const date = selectedDay.value;   
    
    // Faz a requisição para obter os agendamentos do dia selecionado
    const dailySchedules = await scheduleFetchByDay({ date });

    // Exibe os agendamentos
    
        
}
