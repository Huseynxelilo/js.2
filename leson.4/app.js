
let name = prompt("Adınızı daxil edin.")
let age = +prompt("Yaşınızı daxil edin.")
let gender = prompt("Cinsiyyətiniz nədir? (m/M və ya f/F)")
if(gender === "m" || gender === "M") {
    document.write("salam cənab. " + name)
}else if(gender === "f" || gender === "F"){
    document.write("salam xanim. " + name)
}else {
    alert("Siz daxil ola bilməzsiniz. Yenidən cinsinizi yazın.")
}
age > 18 ? document.write(", xoş gəlmisiniz.") : document.write(",icazə verilmir!")