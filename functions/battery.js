import * as document from "document";
import { battery } from "power";

//Getting handle for battery image element
const myBattery = document.getElementById("myBattery");
const batteryIMG = document.getElementById("batteryIMG");

//Calculates battery and sets text
myBattery.text = Math.floor(battery.chargeLevel) + "%";

//changes the image depending on battery percent
if (battery.chargeLevel > 89) {
  batteryIMG.href = "./resources/images/100.png"; // 76-100
} else if (battery.chargeLevel > 74) {
  batteryIMG.href = "./resources/images/75.png"; // 51-75
} else if (battery.chargeLevel > 25) {
  batteryIMG.href = "./resources/images/50.png"; // 26-50
} else {
  batteryIMG.href = "./resources/images/10.png";
}
