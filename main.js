// MINIJUEGO NUMEROS DE AZAR LA COMPUTADORA VS PERSONA
// SOLO TIENES QUE INGRESAR UN NUMERO MAYOR QUE EL DE LA COMPUTADORA


function minijuegos(num1){
    let oportunidades =0;
    let marcadorJugador1 = 1;
    let marcadorComputer = 1;

    while(oportunidades < 5){
    num1 = parseInt(prompt("Ingresa un numero"))
    num2 = Math.floor(Math.random()*100)
    if(num1 > num2){
        document.write(("El Jugador1 Ha ganado,un punto " + num1 + "..." + marcadorJugador1) + "<br/>") 
        alert("Felicitaciones has ganado un punto")
        marcadorJugador1 = marcadorJugador1 + 1
    }else {
        document.write(("La Computer gana un punto,Has perdido,  " + num2 + "..." + marcadorComputer) + "<br/>" )
        alert("has perdido, el punto es para la computer")
        marcadorComputer = marcadorComputer + 1
    }
    if(num1 === num2) {
        alert("han empatado la computer y el jugador1 " + num1 + " " + Y + " " + num2)
    }
    oportunidades++    
}

}

minijuegos()