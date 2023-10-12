document.addEventListener("DOMContentLoaded", function () {
    let contend = document.getElementById("container");
    // Definir el número de filas y columnas de cuadros
    const filas = 50;
    const columnas = 50;

    for (let i = 0; i < filas; i++) {
        for (let z = 0; z < columnas; z++) {

            let cuadro = document.createElement("div");
            cuadro.classList.add("cuadro-pequeno");

            // Agregar un evento para cambiar el color al pasar el ratón
            cuadro.addEventListener("mouseenter", function () {
                let nuevoColor = getRandomColor();
                cuadro.style.backgroundColor = nuevoColor;
            });

            contend.appendChild(cuadro);
        }
    }

    let Buttons = document.getElementById("buttonns");
    let num1Input = document.getElementById("num1");
    let num2Input = document.getElementById("num2");


    Buttons.addEventListener("click", function () {
        const number1 = parseFloat(num1Input.value);
        const number2 = parseFloat(num2Input.value);

        for (let i = 0; i < number1; i++) {
            for (let z = 0; z < number2; z++) {

                let cuadro = document.createElement("div");
                cuadro.classList.add("cuadro-pequeno");
                // Agregar un evento para cambiar el color al pasar el ratón
                cuadro.addEventListener("mouseenter", function () {
                    let nuevoColor = getRandomColor();
                    cuadro.style.backgroundColor = nuevoColor;
                });
                contend.appendChild(cuadro);
            }
        }
    });
});

// Función para generar un color aleatorio
function getRandomColor() {
    let letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
