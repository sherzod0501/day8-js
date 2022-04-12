
function coverter ( one, two){
    if (one == 'usa'){
        return (two * 11.329) 
    }
     else if (one == 'rub'){
         return (two * 134.74)
     }
     return 
}

let a = prompt('valyutani kiriting  usa yoki rub')
let b = prompt('raqamni kiriting')

console.log(coverter(a, b));
