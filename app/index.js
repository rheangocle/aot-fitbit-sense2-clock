import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import { days, months, monthsShort } from "../locales/en";
import "../functions/battery";
import "../functions/heartrate";
import "../functions/activity";

let dateFormat, clockCallback;

function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const clockLabel = document.getElementById("clock-label");
const dateLabel = document.getElementById("date-label");
const dayLabel = document.getElementById("day-label");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let day = today.getDate();
  let dayName = days[today.getDay()];
  let month = zeroPad(today.getMonth() + 1);
  let monthName = months[today.getMonth()];
  let monthNameShort = monthsShort[today.getMonth()];
  let dayNumber = zeroPad(today.getDate());

  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = zeroPad(hours);
  }
  let mins = zeroPad(today.getMinutes());

  dateLabel.text = `${monthNameShort} ${day}`;
  dayLabel.text = `${dayName}`;
  clockLabel.text = `${hours}:${mins}`;
};
