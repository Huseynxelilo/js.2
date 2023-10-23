let gender = prompt("What is your gender?(m/M - f/F)")


if(gender === "m" || gender === "M"){
    alert("Hi Mr. ...")
}else if(gender === "f" || gender === "F"){
    alert("Hi Mrs. ...")
}else {
    alert("Humans have only two biological gender.")
}


switch (gender) {
    case "m":
        document.write("Hi Mr. ...");
        break;
    case "M":
        document.write("Hi Mr. ...");
        break;
    case "f":
        document.write("Hi Mrs. ...");
        break;
    case "F":
        document.write("Hi Mrs. ...");
        break;
    default:    document.write("Humans have only two biological gender.");
}