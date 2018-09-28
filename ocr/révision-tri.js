/*
tri_à_bulles(Tableau T)
    pour i allant de la taille T-1 à 1 // parcours de la fin vers le début
        pour j allant de 0 à i -1 //optimisation pour éviter de tout repasser mais seulement le reste à trier
            si T[j + 1] < T[j]
            echanger_(T[j + 1], T[j])
 */

let tableau = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(inTab) {
    for (let i = 0; i < inTab.length - 1; i++) {
        for (let j = 0; j < inTab.length - 1; j++) {
            if (inTab[j + 1] < inTab[j]) {
                [inTab[j + 1], inTab[j]] = [inTab[j], inTab[j + 1]];
            }
        }
    }
    return inTab;
}
console.log(tableau);
console.log(bubbleSort(tableau));
