// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

//first attempt

// function DNAStrand(dna){

//     var complementaryDna = [];
    
//     for (var i=0; i < dna.length; i++) {
//     var letter = dna[i];
    
//         if (letter === 'A' || letter === 'G') {
//             letter = letter.replace('A', 'T');
//             letter = letter.replace('G', 'C');
//         } else {
//             letter = letter.replace('T', 'A');
//             letter = letter.replace('C', 'G');
//         };
    
//         complementaryDna.push(letter);
//     }
    
//     return complementaryDna.join('');
//     }

//updated 

function DNAStrand(dna) {

    var complementaryDna = [];
    
    for (var i=0; i < dna.length; i++) {
        var base = dna[i];

        switch (base) {
            case 'A':
                complementaryBase = base.replace('A', 'T');
                break;
            case 'G':
                complementaryBase = base.replace('G', 'C');
                break;
            case 'T':
                complementaryBase = base.replace('T', 'A');
                break;
            case 'C':
                complementaryBase = base.replace('C', 'G');
        }
    
        complementaryDna.push(complementaryBase);
    }

    return complementaryDna.join('');

}

    
    //test
    console.log(DNAStrand("ATTGC"));
    
    //notes
    //for each letter of the string, replace A with T and G with C, T with A and C with G
    //has to go through the string just once for each letter 
    
    //other solutions
    function DNAStrand(dna) {
        return dna.replace(/./g, function(c) {
            return DNAStrand.pairs[c]
          })
        }
        
        DNAStrand.pairs = {
          A: 'T',
          T: 'A',
          C: 'G',
          G: 'C',
        }
    