// var nama = prompt("Masukkan nama: ");
// alert ("halo " + nama);

// var tes = confirm("oke?");
// if (tes === true) {
//     alert("pesanan sudah oke!");
// }else {
//     alert("pesanan belum oke!");
// }

alert("selamat datang!"); 
var lagi = true;
while (lagi === true) {
    var nama = prompt("Masukkan nama: ");
    alert("halo " + nama);

    lagi = confirm("coba lagi?");
}

alert("terimakasih!");
