/**
 * Crea un elemento <img> para una carta específica.
 * @param {string} carta - El nombre de la carta (por ejemplo, "3H", "JD").
 * @returns {HTMLImageElement} El elemento <img> configurado.
 */
export const crearImagenCarta = (carta) => {
    if (!carta) throw new Error("La carta es un argumento obligatorio");
    const imgCarta = document.createElement("img"); // Crear el elemento <img>
    imgCarta.src = `assets/cartas/${carta}.png`; // Establecer la ruta de la imagen
    imgCarta.classList.add("carta"); // Agregar la clase CSS
    return imgCarta; // Retornar el elemento creado
};
