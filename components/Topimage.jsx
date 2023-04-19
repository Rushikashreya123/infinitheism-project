import { SvgXml } from 'react-native-svg';

const svgString = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="33px" height="7px" viewBox="0 0 33 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <g id="Video-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Multi-chapter_locked-1" transform="translate(-143.000000, -24.000000)" fill="#ED1C23">
            <g id="Group" transform="translate(143.000000, 24.000000)">
                <circle id="Oval" cx="3.5" cy="3.5" r="3.5"></circle>
                <circle id="Oval-Copy" cx="16.5" cy="3.5" r="3.5"></circle>
                <circle id="Oval-Copy-2" cx="29.5" cy="3.5" r="3.5"></circle>
            </g>
        </g>
    </g>
</svg>`;


const Topimage=()=> {
  return <SvgXml xml={svgString} width='20%' height='15%' />;
}
export default Topimage;