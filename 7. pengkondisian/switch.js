// var angka = parseInt(prompt("Masukkan angka: "));

// switch(angka) {
//     case 1:
//         alert("anda memasukkan angka 1");
//         break;
//     case 2:
//         alert("anda memasukkan angka 2");
//         break;
//     case 3:
//         alert("anda memasukkan angka 3");
//         break;
//     default:
//         alert("angka yang anda masukkan salah");
//         break;
// }


// var item = prompt("masukkan makanan / minuman : \n contoh: nasi, daging, burger, salad, softdrink");

// switch(item) {
//     case "nasi":
//         alert("nasi adalah makanan / minuman sehat!");
//         break;
//     case "daging":
//         alert("daging adalah makanan / minuman sehat!");
//         break;
//     case "burger":
//         alert("burger adalah makanan / minuman tidak sehat!");
//         break;
//     case "salad":
//         alert("salad adalah makanan / minuman sehat!");
//         break;
//     case "softdrink":
//         alert("softdrink adalah makanan / minuman tidak sehat!");
//         break;
//     default:
//         alert("anda memasukkan makanan / minuman yang salah!");
//         break;
//     }

var item = prompt("masukkan makanan / minuman : \n contoh: nasi, daging, burger, salad, softdrink");

switch(item) {
    case "nasi":
    case "daging":
    case "salad":
        alert("makanan / minuman sehat!");
        break;
    case "burger":
    case "softdrink":
        alert("makanan / minuman tidak sehat!");
        break;
    default:
        alert("anda memasukkan makanan / minuman yang salah!");
        break;
    }