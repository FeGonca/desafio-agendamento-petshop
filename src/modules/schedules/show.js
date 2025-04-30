"use sttrict"

import dayjs from "dayjs";

// Seleciona as sessões
const periodMorning = document.getElementById("appointmenstMorning");
const periodAfternoon = document.getElementById("appointmenstAfternoon");
const periodNight = document.getElementById("appointmenstNight");

export function showSchedules({dailySchedules}) {
    console.log("Exibindo os agendamentos...", dailySchedules);
    
    
    try {
        // Limpa os agendamentos
        periodMorning.innerHTML = "";
        // periodAfternoon.innerHTML = "";
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

            const btn = document.createElement("button");
            btn.textContent = "Remover agendamento";

            // Adiciona elementos ao item
            item.append(timeName, desc, btn);

            // Obtem o período do agendamento
            const hour = schedule.time.split(":")[0];
            
            // Renderiza o agendamento no período correto
            if (hour >= 8 && hour < 12) {
                periodMorning.appendChild(item);
            } else if (hour >= 12 && hour < 18) {
                periodAfternoon.appendChild(item);
            } else if (hour >= 18 && hour < 24) {
                periodNight.appendChild(item);
            }
            
        })
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
        console.error("Erro ao exibir os agendamentos:", error);
    }
}