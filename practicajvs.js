
/* crear diferentes variables dentro de un script para la practica NVL-JS-P6a */

var mi_nombre = "Urtzi";
var mis_apellidos = ["Arana", "Santamaria"];
var mi_edad = 38;
var dias_semana = ["L", "M", "X", "J", "V", "S", "D"];
var gravedad$ = 1;
var impares_numeros = [1, 3, 5];
var cadena_texto = "hello \"world\"";


/*interactuando con las variables */

alert(mi_edad += 5);
alert(mi_edad ++);
alert(mi_edad *= 2);
alert("URTZI");
alert(typeof (dias_semana));
alert(mi_edad === "5");
alert(mi_nombre + mis_apellidos);
alert(mi_nombre.length);

/* practica con cadena string */

var mi_cadena = "Amigo";

document.write(mi_cadena.replace("A", "a"));
document.write(mi_cadena.toLowerCase());
document.write(mi_cadena[0].toLowerCase()+mi_cadena[1].toLowerCase()+mi_cadena[2].toLowerCase()+mi_cadena[3].toLowerCase()+mi_cadena[4].toLowerCase());

/* practica con matrices */

var mi_matriz = [[1,2],[3,4],[5,6]]

document.write(mi_matriz);
document.write(mi_matriz.length);
document.write(mi_matriz[1].length);
document.write(mi_matriz[2]);
document.write(mi_matriz[2][1]);

/* practica slice */

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
var lugares = ["Madrid", "Sevilla", "Barcelona", "Valencia", "Zaragoza", "Bilbao", "Donosti"]
var lunes_madrid = [dias[0]+","+lugares[0]]
var martes_sevilla = [dias[1]+","+lugares[1]]
var mierco_barna = [dias[2]+","+lugares[2]]
var jueves_valen = [dias[3]+","+lugares[3]]
var viernes_zarago = [dias[4]+","+lugares[4]]
var sabado_bilbo = [dias[5]+","+lugares[5]]
var domin_donosti = [dias[6]+","+lugares[6]]
var resultado = [lunes_madrid+"/"+ martes_sevilla+"/"+mierco_barna+"/"+jueves_valen+"/"+viernes_zarago+"/"+sabado_bilbo+"/"+domin_donosti]
        
document.write(resultado)

/* practica bucle */

for (var i=0; i<=5; i++){
    alert(i)
}

