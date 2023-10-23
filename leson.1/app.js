
let gun = +prompt("heftenin gunlerini daxil edin(1-7")

if(gun === 1){
    alert("Bu gun bazar ertesidir.")
}else if(gun === 2){
    alert("Bu gun carsanba axsamidir.")
}else if(gun === 3){
    alert("BU gun cersenbedir.")
}else if(gun === 4){
    alert('Bu gun cume axsamidir.')
}else if(gun === 5){
    alert("Bu gun cumedir.")
}else if(gun === 6){
    alert("Bu gun senbedir.")
}else if(gun === 7){
    alert("Bu gun bazardir.")
}else if(gun === 8){
    alert("Heftenin yalniz 7 gunu var.")

}

switch (gun) {
    case 1:
        document.write("Bugun bazar ertesidir.")
        break;
    case 2:
        document.write("Bugun cersenbe axsamidir.")
        break;
    case 3:
        document.write("Bugun cersenbedir.")
        break;
    case 4:
        document.write("Bugun cume axsamidir.")
        break; 
    case 5:
        document.write("Bugun cumedir.")
        break;
    case 6:
        document.write("Bugun senbedir.")
        break;
    case 7:
        document.write("Bugun bazardir.")
        break;
    default: document.write("Heftenin yalniz 7 gunu var.")                                              
}

