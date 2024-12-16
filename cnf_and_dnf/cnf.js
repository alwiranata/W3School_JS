const CNF = [
    ["A", "!B"],  // group pertama: A OR !B  A= true B = true = true
    ["C", "D"],   // group kedua: C OR D     C=True D= False = true
];

// Fungsi untuk mengevaluasi formula CNF
function functionCNF(variabels) {
    // Gunakan `every()` untuk memeriksa apakah semua gorup bernilai true
    return CNF.every(group =>  group.some(index => {
            // Jika index diawali dengan tanda negasi '!', maka periksa nilai negasi dari variabel tersebut
            if (index.startsWith("!")) {
                const varName = index.slice(1); // Ambil nama variabel tanpa negasi
                return !variabels[varName]; // Return negasi dari nilai variabel tersebut
            }
            // Jika index tidak ada negasi, periksa apakah nilai variabel tersebut benar
            return variabels[index];
        })
    );
}

const cnfInput = {
    A: true,  
    B: false,  
    C: true,   
    D: false,  
};

console.log("Hasil CNF: " + functionCNF(cnfInput));  