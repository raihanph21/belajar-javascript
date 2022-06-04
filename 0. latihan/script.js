// var s = '';
// for (var i = 0; i < 5; i++) {
//     for(var j = 0; j <= i; j++) {
//         s += "*"
//     }
//     s += "\n"; // s += "*" -> sama dengan s = s + "*";
// }
// console.log(s); 


// var s = '';
// for (var i = 10; i > 0; i--) {
//     for(var j = 0; j < i; j++) {
//         s += "*"
//     }
//     s += "\n"; // s += "*" -> sama dengan s = s + "*";
// }
// console.log(s); 

// var s = '';
// for (var i = 10; i > 0; i--) {
//     for(var j = 0; j < i; j++) {
//         s += "*"
//     }
//     s += "\n"; // s += "*" -> sama dengan s = s + "*";
// }
// console.log(s); 

var s = "";
for( i = 1; i <= 10; i++ ) {
    for( j = 1; j <= 10; j++ ) {
        if( i <= j ) {
            s += "*";          
        } else {
            s += " ";
        }
    }
    s += "\n";
}
console.log(s);