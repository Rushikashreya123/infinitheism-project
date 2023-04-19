import { SvgXml } from "react-native-svg";

const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.15557 7.12113C2.44943 4.67815 2.73597 2.29605 5.07051 0.91651C8.68165 -1.21692 13.2005 0.468224 13.4439 4.99394C13.4452 5.05848 13.2672 5.12793 13.0853 5.1989C12.9014 5.27064 12.7135 5.34394 12.703 5.41525M12.7025 5.42251C12.7025 5.42009 12.7026 5.41767 12.703 5.41525C12.7134 5.35644 12.8856 5.28758 13.0613 5.21729C13.2525 5.14084 13.4479 5.06269 13.4439 4.99394C13.4894 7.41022 13.7757 11.1371 16.0154 12.7082C15.9699 12.6767 15.8058 12.7965 15.6402 12.9174C15.4904 13.0266 15.3395 13.1368 15.2739 13.1368C13.0334 11.5657 12.7471 7.8388 12.7025 5.42251ZM12.7025 5.42251C12.5782 3.12708 11.0954 0.794796 8.6628 0.398796C6.00823 -0.0340616 3.34423 1.5448 3.18823 4.43422C3.17905 4.60593 3.17039 4.77844 3.16169 4.95153C3.05339 7.10779 2.9406 9.35314 1.78851 11.2511C1.6188 11.5305 0.83194 12.7082 0.648511 12.7082L15.2739 13.1368H6.27908H0.98794C0.74989 13.1368 0.540886 13.1605 0.377161 13.179C-0.0409735 13.2264 -0.163791 13.2403 0.279083 12.7408C1.66805 11.174 1.91428 9.12706 2.15557 7.12113M8.5908 17.0845C8.55868 17.1038 8.52644 17.1232 8.4942 17.1422C8.59246 17.0718 8.67982 16.9981 8.75967 16.9182C8.87403 16.8882 8.98846 16.8467 9.10191 16.7934L8.5908 17.0845ZM8.5908 17.0845C8.60196 17.0778 8.61311 17.0711 8.62424 17.0644C8.64152 17.054 8.65875 17.0437 8.67591 17.0334C8.66233 17.0414 8.64859 17.0493 8.63475 17.0574C8.60405 17.0752 8.57292 17.0933 8.5422 17.1122L8.5908 17.0845ZM6.81763 16.1368C7.26668 16.8215 8.01172 17.1148 8.75967 16.9182C8.86439 16.8135 8.9562 16.6981 9.04277 16.5654C9.11261 16.4567 9.2655 16.4023 9.41747 16.3482C9.56763 16.2947 9.71689 16.2416 9.7842 16.1368C8.99305 17.3617 6.98905 17.9582 6.0762 16.5654C6.07827 16.5688 6.19739 16.4968 6.33956 16.4107C6.55001 16.2834 6.81098 16.1255 6.81763 16.1368Z" fill="white"/>
</svg>`;

const Notification = () => {
  return <SvgXml xml={svgString} width="20px" height="20px" />;
};
export default Notification;