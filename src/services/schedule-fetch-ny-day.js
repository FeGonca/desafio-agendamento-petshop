import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição para obter os agendamentos por dia
    const response = await fetch(`${apiConfig.baseURL}/sechedules`);

    // Convert para json
    const data = await response.json();
    console.log(data);

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.date, "day")
    );

    return dailySchedules;
    
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
