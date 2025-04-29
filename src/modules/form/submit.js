"use sttrict"

import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form");
const scheduleTutor = document.getElementById("nameTutor");
const schedulePet = document.getElementById("namePet");
const schedulePhone = document.getElementById("numPhone");
const scheduleDesc = document.getElementById("serviceDescription");
const scheduleDate = document.getElementById("date");
const scheduleTime = document.getElementById("time");


// Data atual para input date.
const inputToday = dayjs(new dayjs()).format("YYYY-MM-DD");

// Definindo data e hora atual ao carregar o form.
scheduleDate.value = inputToday;
scheduleTime.value = dayjs(new dayjs()).format("HH:mm");

// Definir a data minina para agendamento como a data atual.
scheduleDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault();

    // Coletando dados do formulário.
    const tutor = scheduleTutor.value.trim();
    const pet = schedulePet.value;
    const phone = schedulePhone.value;
    const desc = scheduleDesc.value;
    const date = scheduleDate.value;
    const time = scheduleTime.value;
    const id = new Date().getTime();

    await scheduleNew({
        id,
        tutor,
        pet,
        phone,
        desc,
        date,
        time
    });
    
    
}