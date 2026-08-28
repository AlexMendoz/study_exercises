export {};


function wordPatter(pattern: string, s: string) {
    let words = s.split(" "); // array de palabras
    

    if (pattern.length != words.length) {
        return false;
    };

    let oneByOne = new Map();
    let unique = new Set();
    for (let i = 0; i < s.length; i++) {
        //validacion por si la clave ya existe, tengoq ue ver que el valor sea, el mismo, si es mismo no pasa nada pero si es otro, regresamos false
        if (oneByOne.has(pattern[i])) {
            // console.log(oneByOne
            if(oneByOne.get(pattern[i]) == words[i]){
                oneByOne.set(pattern[i], words[i]);
                unique.add(words[i]);
            } else {
                return false;
            }
        } 
        oneByOne.set(pattern[i], words[i]);
        unique.add(words[i]);
        
    }
    
    if (unique.size != oneByOne.size) {
        return false;
    }
    return true;

}


console.log(wordPatter("abba", "dog cat cat dog"), true);
console.log(wordPatter("abba", "dog cat cat fish"), false);
console.log(wordPatter("aba", "cat cat cat dog"), false);
console.log(wordPatter("abba", "cat cat cat cat"), false);

// si ambos tiene la mismo longitud entonces esto se cumple?



/**
 * Bien Alex, no te desesperes, lo vas a lograr, solo respira y sigue adelante
 * 
 * Cada letra de patter solo puede ir a una letra de s
 * 
 * patter = abba;  s = dog cat cat dog
 * 
 * a -> dog             a -> dog   
 * b -> cat             b -> cat
 * b -> cat
 * a -> dog
 * 
 * pattern = "abba", s = "dog cat cat fish"
 * 
 * a -> dog             a -> dog   
 * b -> cat             b -> cat
 * b -> cat             a -> fish | esto no puede ser ya que a ya tiene a dog
 * a -> fish
 * 
 * Solucion 1) llenar el map inicial, tomar todas las llaves y meteras en un map, verificar que no exista esa llave
 * Solucion 2) durando el llenado incial del map, se verifica que no exista la llave en el map, si existe signiifca que no se puede
 * 
 * 
 * NOTA IMPORTANTE
 * 
 * la longitud de s, despues de realizar el split la longitud es variable.
 * Se tiene que recorrer en nuevo s. entonces tenemos que hacer el map en funcion de cada letra de patter y del nuevo s
 * 
 * Como se tiene que tener una correspondecnia 1 a 1, patter y s, deben tener la misma longitud
 */