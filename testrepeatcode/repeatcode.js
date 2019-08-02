
var jmlAngkot = 10;
var angkotBeroperasi = 7;
var noAngkot = 1;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No.' + noAngkot + ' beroprasi dengan baik.');
    } else {
        console.log('Angkot No.' + noAngkot + ' sedang tidak beroprasi.');
    }
}