"use sttrict"
import { schedulesDay } from "../schedules/schedule.js";

const selectedDay = document.getElementById("calendar");

selectedDay.onchange = function (event) {
    schedulesDay();
}