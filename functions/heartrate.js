import * as document from "document";
/*
  Returns the Heart Rate BPM, with off-wrist detection.
  Callback raised to update your UI.
*/
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { me as appbit } from "appbit";

const heartIMG = document.getElementById("heartIMG");
const heartTXT = document.getElementById("txtHRM");
if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
  const hrm = new HeartRateSensor();
  hrm.addEventListener("reading", () => {
    console.log(`Current heart rate: ${hrm.heartRate}`);
    heartIMG.href = "./resources/images/heart-icon.png";
    heartTXT.text = `${hrm.heartRate}`;
  });
  display.addEventListener("change", () => {
    // Automatically stop the sensor when the screen is off to conserve battery
    display.on ? hrm.start() : hrm.stop();
  });
  console.log(hrm);
  hrm.start();
}
