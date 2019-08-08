// var x = 1000;
// console.log('hello world console');
// console.log('Isi dari variable x adalah ' + x);
// // alert('hello world');
// var nama = prompt('Masukan Nama :');
// console.log(nama); 

// var tes = confirm('kamu yakin mau keluar ??');
// if (tes === true) 
// {
//     alert('anda menekan tombol OK');
// } else
// {
//     alert('anda menekan tombol cancel');
// }

// alert('selamat datang');
// var lagi = true;

// while( lagi === true) {
//     var nama = prompt('Masukan Nama:');
//     alert('Hello' + nama);

//     lagi = confirm('coba lagi??');
// }

// alert('Terima kasih');

// alert('Mulai');
// for(var i = 0; i < 5; i++) {
//     alert('Hello World');
// }
// alert('Selesai');

// var angka = prompt('Masukan angka:');
// if (angka % 2 === 0) {
//     alert( angka  + 'adalah bilangan GENAP');
// } else {
//     alert( angka  + 'adalah bilangan GANJIL');
// }

//  var ulang = true 
//  while(ulang) {
//      console.log('Hello Word');
//      ulang = confirm('Mau Coba lagi??');
//  }

// var nilaiAwal = 1;
// while(nilaiAwal <= 50) {
//     console.log('Hello word ' + nilaiAwal + 'x');
// nilaiAwal++;
// }

// for (nilaiAwal=1; nilaiAwal <=10; nilaiAwal++ ) {
//     console.log('Hello World' + nilaiAwal + '' );
// }

// var angka = prompt('Masukan Angka:');

// if (angka % 2 === 0) {
//     console.log('Angka Anda GENAP');
// } else if (angka % 2 === 1) {
//     console.log('Angka Anda GANJIL');
// } else {
//     console.log('Yang anda masukan bukan ANGKA');
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for (noAngkot =1; noAngkot <= jmlAngkot; noAngkot++) {
    
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angko No.' +noAngkot+ ' beroperasi dengan baik.');
        
//     } else {
//         console.log('Angkot No. ' +noAngkot+ ' sedang tidak beroprasi.');
//     }
// }

// var angka = prompt("Masukan Angka :");

// switch(angka) {
//     case '1' :
//         alert('Angka anda 1');
//         break;
//     case '2' :
//         alert('Angka anda 2');
//         break;
//     default :
//         alert('angka yang anda masukan salah');
// }

// let a = 1;
// let b = 10;

// for (a=1;a <= b; a++) {
//     console.log('Angka ke ' +a+ '');
// }

// var s = '';
// for(var i = 0; i<= 10; i++) {
//     for(var j =0; j<= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);


// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));
// console.log(jumlahVolumeDuaKubus(10, 8));

// function tampilAngka(n) {
//     if (n === 0 ) return;
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);
 

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));