/*function togglemode_sombre() {
    const mode_sombre = document.querySelector("#modeSombre");
    const body = document.querySelector("body");

    if (mode_sombre) {
        function toggleModeSombre() {
        body.classList.toggle("sombre");
        }
        mode_sombre.addEventListener("click", toggleModeSombre);
    }
    }

window.addEventListener("DOMContentLoaded", function () {
    togglemode_sombre();
    });
*/

function toggleDarkMode() {
    document.body.classList.toggle("sombre");
    }