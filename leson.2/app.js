let ay = (prompt("Ilin necenci ayidir? 1-12"))

if(ay === 1){
    alert("Bu ay Yanvar ayidir.")
}else if(ay === 2){
    alert("Bu ay fevral ayidir.")
}else if(ay === 3){
    alert("Bu ay mart ayidir. ")
}else if(ay === 4){
    alert('Bu ay aprel ayidir.')
}else if(ay === 5){
    alert("Bu ay may ayidir.")
}else if(ay === 6){
    alert("Bu ay iyun ayidir.")
}else if(ay === 7){
    alert("Bu ay iyul ayidir.")
}else if(ay === 8){
    alert("Bu ay avqust ayidir.")
}else if(ay === 9){
    alert("Bu ay sentyabr ayidir")
}else if(ay === 10){
    alert("Bu ay oktyabr ayidir")
}else if(ay === 11){
    alert("Bu ay noyabr ayidir")
}else if(ay === 12){
    alert("Bu ay dekabr ayidir")
}else if(ay === 10){
    alert("Iled yanliz 12 ay var.")
}


switch (ay) {
    case 1:
        document.write("Bu ay Yanvar ayidir.")
        break;
    case 2:
        document.write("Bu ay fevral ayidir.")
        break;
    case 3:
        document.write("Bu ay mart ayidir.")
        break;
    case 4:
        document.write("Bu ay aprel ayidir.")
        break; 
    case 5:
        document.write(" Bu ay may ayidir.")
        break;
    case 6:
        document.write("Bu ay iyun ayidir.")
        break;
    case 7:
        document.write("Bu ay iyul ayidir.")
        break;
    case 8: 
        document.write("Bu ay avqust ayidir.")
    case 9:
        document.write("Bu ay sentyabr ayIdIr.")
    case 10:
        document.write("Bu ay oktyabr ayIdIr.") 
    case 11:
        document.write("Bu ay noyabr ayidir.")
    case 12:
        document.write("Bu ay dekabr ayidir.")

    default: document.write("ilde yanliz 12 ay var.")                                              
}