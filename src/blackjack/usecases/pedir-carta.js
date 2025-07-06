
/**
 * Esta funcion da al jugador una carta
 * @param {Array<String>} deck Ejemplo: ['2C','4D','3H'...'4H']
 * @returns {String} Ejemplo: '4H'
 */

export const pedirCarta = (deck) => {
    

    if (!deck || deck.length === 0 ) throw new Error('pedirCarta es obligatorio como un arreglo de string, No hay cartas en el deck');
    const carta = deck.pop();
    return carta;
}