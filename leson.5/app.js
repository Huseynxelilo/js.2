
let housePrice = +prompt("Evi almaq istediyiniz qiyməti daxil edin.")
let currency = prompt("Evi almaq istediyiniz məzənnəsini daxil edin.(azn vs.)")
let houseArea = +prompt("Evi almaq istediyiniz sahənin ölçüsünü daxil edin.(Kv. metr)")
if(houseArea >= 2000 && housePrice <= 99999 && currency === "azn") {
    document.write("Evi alıram.") }else {
     document.write("Evi almıram.")
 }