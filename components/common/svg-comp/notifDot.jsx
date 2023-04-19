import { SvgXml } from "react-native-svg";

const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_365)">
<rect x="4" y="4" width="5" height="5" rx="2.5" fill="#3061FF"/>
</g>
<defs>
<filter id="filter0_d_0_365" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0.476453 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_365"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_365" result="shape"/>
</filter>
</defs>
</svg>`;

const NotifDot = () => {
  return <SvgXml xml={svgString} width="10px" height="10px" />;
};
export default NotifDot;