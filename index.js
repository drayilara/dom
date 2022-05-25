
const div = document.querySelector("div");
const logger = document.querySelector("p");

div.ondblclick = function(e){
        const cx = e.clientX;
        const cy = e.clientY;
        const sx = e.screenX;
        const sy = e.clientY;

        logger.textContent = `ClientX/Y: ${cx}/${cy}
                             ScreenX/Y: ${sx}/${sy}`;
}


