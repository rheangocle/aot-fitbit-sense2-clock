import { me as appbit } from "appbit";
import * as document from "document";
import { today } from "user-activity";

const stepsTxt = document.getElementById("stepsCount");
const stepsImg = document.getElementById("stepsImg");

if (appbit.permissions.granted("access_activity")) {
  console.log(`${today.adjusted.steps} Steps`);
  stepsTxt.text = `${today.adjusted.steps}`;
  stepsImg.href = "./resources/images/foot-icon-white.png";
  if (today.local.elevationGain !== undefined) {
    console.log(`${today.adjusted.elevationGain} Floor(s)`);
  }
}
