const DNF =[
    ["A" , "!B"] ,              
    ["!C" ,"D",]

]

function functionDNF(variabels){
    // Gunakan `some()` untuk memeriksa apakah ada setidaknya satu group yang bernilai benar
    return DNF.some(group => group.every(literal => {
            // Jika literal diawali dengan tanda negasi '!', maka periksa nilai negasi dari variabel tersebut
        if(literal.startsWith("!")){
            const varName = literal.slice(1)//memotong dan memulai dari indeks ke 1
            return !variabels[varName] //mengevaluasi nilai variabel true/false
        }
            // Jika literal tidak ada negasi, periksa apakah nilai variabel tersebut benar
        return variabels[literal]
    }))
}

const dnfInput = {
    A: true,
    B: false,
    C: true,
    D: false
}

console.log("Hasil DNF :" + functionDNF(dnfInput))