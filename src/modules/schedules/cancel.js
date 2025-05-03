"use strict";

import { schedulesDay } from "./schedule.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".appointmenst");

// Gerar evento de clique para cada período
periods.forEach((period) => {
  // Capturar o evento de clique
  period.addEventListener("click", async (event) => {
    if (event.target.closest("button")) {
      // Obtém o pai do elemento clicado
      const item = event.target.closest(".appointment");
      // Obtém o ID do item
      const { id } = item.dataset;
      

      // Confirma que o id foi selecionado
      if (id) {
        // Confoirma que o usuário deseja cancelar o agendamento
        const isConfirm = confirm(
          `Você tem certeza que deseja cancelar o agendamento?`
        );

        if (isConfirm) {
          // Faz a requisição para cancelar o agendamento
          await scheduleCancel({ id });
          // Atualiza a lista de agendamentos
          schedulesDay();
        }
      }

    }
  });
});
