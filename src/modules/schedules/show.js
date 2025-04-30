"use sttrict"

import dayjs from "dayjs";

// Seleciona as sessões
const periodMorning = document.getElementById("appointmenstMorning");
const periodAfternoon = document.getElementById("appointmenstAfternoon");
const periodNight = document.getElementById("appointmenstNight");

export function showSchedules({dailySchedules}) {
    
    try {
        // Limpa os agendamentos
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        // Renderiza os agendamentos por período
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("div");
            item.classList.add("appointment");

            const timeName = document.createElement("div");
            timeName.classList.add("flex");
            timeName.innerHTML = `<h2>${schedule.time}</h2><span><strong>${schedule.pet}</strong> / ${schedule.tutor}</span>`;

            const desc = document.createElement("span");
            desc.textContent = schedule.desc;
        })
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
        console.error("Erro ao exibir os agendamentos:", error);
    }
}