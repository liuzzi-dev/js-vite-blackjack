
/**
 * Obtener el valor numerico de la carta
 * @param {String} carta como string de numero y letra
 * @returns {Number} valor numerico de la carta
 */


export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};