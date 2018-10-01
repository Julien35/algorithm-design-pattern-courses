/*
Exemple d'pplication : Triangle de Pascal

mafonction(param1, param2):
    début
        si condition faire
            retourner calcul
        sinon faire
            mafonction(param1, param2)
            retourner quelque-chose
        fin condition faire
    fin
fin ma fonction
 */

/*
Suite de Fibonacci => suite de nombres entiers
0 + 1 = 1, 1 + 2 = 3, 3 + 5 = 8
 */

/**
 Le temps de calcul est à chaque fois proportionnel à n
 mais l'espace mémoire occupé n'est pas constant dans le second cas
 * @param n
 * @param a
 * @param b
 * @returns {*}
 */
function fibonacciRecursifTerminal(n, a, b) {
    return n > 0 ? fibonacciRecursifTerminal(n - 1, b, a + b) : a;
}
console.log(fibonacciRecursifTerminal(10, 0, 1));

/*
Algo Lineaire, O(n)
Calcul de deux valeurs consécutives de la suite
 */
function fibonacciLineaire(n) {
    let a = 0, b = 1, temp = 0;

    for (let i = 1; i < n + 1; i++) {
        // temp = a + b;
        // a = b;
        // b = temp;
        [a, b] = [b, a + b];
    }
    return a;
}

console.log(fibonacciLineaire(10));

/*
Algo récursif naïf, O(2^n)
chaque nouveau calcul demande deux fois plus de mémoire.
 */
function fibonacciNaif(n) {
    return n <= 1 ? n : fibonacciNaif(n - 1) + fibonacciNaif(n - 2);
}

console.log(fibonacciNaif(10));

/*
Factorielle
3! = 3 * 2 * 1
 */

// console.log(factorielleRecursive(3));
function factorielleRecursive(n) {
    return n <= 1 ? 1 : n * factorielleRecursive(n - 1);
}
