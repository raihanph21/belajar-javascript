var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for (angkot; angkot <= jmlAngkot; angkot++) { 
    if(angkot <= 6) { 
        console.log("angkot No. " + angkot + " beroperasi dengan baik");
    } else {
        console.log("Angkot No. " + angkot + " sedang tidak beroperasi")
    }
}

// bisa juga for(var angkot = 1; ... ; .... .)