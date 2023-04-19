import { SvgXml } from "react-native-svg";

const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1.5" cy="7.5" r="1.5" fill="#052EA7"/>
<circle cx="1.5" cy="1.5" r="1.5" fill="#052EA7"/>
<circle cx="1.5" cy="13.5" r="1.5" fill="#052EA7"/>
</svg>`;

const VerticalDots = () => {
  return <SvgXml xml={svgString} width="20px" height="20px" />;
};
export default VerticalDots;