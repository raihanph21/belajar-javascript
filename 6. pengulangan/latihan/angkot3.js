var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for (angkot; angkot <= angkotBeroperasi; angkot++) {
    if(angkot <= 6) {
        console.log("angkot No. " + angkot + " beroperasi dengan baik");
    } else if (angkot >= 7 ) {
        console.log("Angkot No. " + angkot + " sedang tidak beroperasi")
    }
}