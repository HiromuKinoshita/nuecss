import { colorLuminance, getContrast } from './utils.js'

let rootStyle;
let bgColor;
let txtColor;
let btnEdgeLight;
let btnEdgeShadow;
const lumDiff = .1;

window.onload = (event) => {
  rootStyle = getComputedStyle(document.documentElement);
  bgColor = rootStyle.getPropertyValue('--nue-bg-color');
  txtColor = getContrast(bgColor);
  btnEdgeLight = colorLuminance(bgColor, lumDiff);
  btnEdgeShadow = colorLuminance(bgColor, lumDiff * -1);
  document.documentElement.style.setProperty('--nue-button-edge-light', btnEdgeLight);
  document.documentElement.style.setProperty('--nue-button-edge-shadow', btnEdgeShadow);
};
