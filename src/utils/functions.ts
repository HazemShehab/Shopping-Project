/**
 * 
 * @param {string} txt - The input test to be sliced.
 * @param {number} {max=50} - The maximum length before trunsaction.
 * @returns The sliced text, with an ellipsis (...) appended if trunsacted.
 */

export function textSlicer(txt:string, max:number = 50) {
    if(txt.length >= max) return `${txt.slice(0,max)} ...`;
    return txt;
}