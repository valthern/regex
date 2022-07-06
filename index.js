const regex = /Git\b/;
const palabra = "Me gusta mucho aaaaaGit porque es bueno";


if (regex.test(palabra)) {
    console.log("Es correcto");
} else {
    console.error("Es Incorrecto");
}
