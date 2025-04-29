import dayjs from "dayjs";
import { schedulesDay } from "./schedules/schedule.js";
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js";

const selectedDay = document.getElementById("calendar");
selectedDay.value = dayjs().format("YYYY-MM-DD");

document.addEventListener("DOMContentLoaded", function(){
    schedulesDay();
})