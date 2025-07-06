

/**
 * Esta funcion transforma el nombre de la carta a un valor numerico
 * Ejemplo: '2' al '9' igual a 2 a 9 A=11, J,Q,K= 10 
 * @param {String} carta Ejemplo:'4H'
 * @returns {Number} Ejemplo : 4
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}