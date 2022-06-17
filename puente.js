let puente = parseInt(prompt("Bienvenidos al juego del calamar: \n seleccione 1 si desea continuar \n selecciones 2 si desea salir"));

if(!isNaN(puente)){
    if(puente === 1){
        let puente1 =parseInt(prompt("Puente 1. USTED HA ACEPTADO ELRETO: \n Elija un puente seleccionando 1 ó 2"))
        if (puente1 ===1){
            let puente2 = parseInt(prompt("Puente 2. TE SALVASTE. Elija otra vez para pasar al puente 3"))
            if (puente2 === 2){
                let puente3 = parseInt(prompt("Puente 3. VAS BIEN. Elija otra vez para pasar al puente 4"))
                if (puente3 === 2){
                    let puente4 = parseInt(prompt("Puente 4. SEGUÍS CON VIDA. Elija otra vez para pasar al puente 5"))
                    if (puente4 === 1) {
                        let puente5 = parseInt(prompt("Puente 5. CASI POR LA MITAD. Elija otra vez para pasar al puente 6"))
                        if (puente5 === 2) {
                            let puente6 = parseInt(prompt("puente 6. VAS POR MITAD DE CAMINO. Elija otra vez para pasar al puente 7"))
                            if (puente6 === 1) {
                                let puente7 = parseInt(prompt("Puente 7. VAMOS CARAJO. Elija otra vez para pasar al puente 8"))
                                if (puente7 === 1) {
                                    let puente8 = parseInt(prompt("Puente 8. QUEDA POCO. Elija otra vez para pasar al puente 9"))
                                    if (puente8 === 1) {
                                        let puente9 = parseInt(prompt("Puente 9. QUEDAN DOS. Elija otra vez para pasar al puente 10"))
                                        if (puente9 === 2) {
                                            let puente10 = parseInt(prompt("Puente 10. SE LOGRARÁ?. Elija otra vez para pasar al puente 11"))
                                            if (puente10 === 1) {
                                                let puente11 = parseInt(prompt("Puente11. USTED SE HARÁ MILLONARIO??. Elija por última vez"))
                                                if (puente11 ===1){
                                                    alert ("FELICIDADES. ACABA DE GANAR CUATRO MILLONES DE DÓLARES")
                                                } else if (puente11 !== 1){
                                                    alert ("GAME OVER. FALTO EL ULTIMO PUENTE")
                                                }
                                            } else if (puente10 !== 1) {
                                                alert ("GAME OVER")
                                            }
                                        }else if (puente9 !== 2){
                                            alert("GAME OVER")
                                        }
                                    }else if (puente8 !== 1){
                                        alert("GAME OVER")
                                    }
                                }else if (puente7 !== 1){
                                    alert("GAME OVER")
                                }
                            }else if (puente6 !== 1){
                                alert("GAME OVER")
                            }
                        }else if (puente5 !== 2){
                            alert("GAME OVER")
                        }
                    }else if (puente4 !== 1){
                        alert("GAME OVER")
                    }
                } else if (puente3 !== 2){
                    alert("GAME OVER")
                }
            } else if (puente2 !== 2){
                alert("GAME OVER")
            }
        } else if (puente1 !== 1) {
            alert ("GAME OVER")
        }
    } else if (puente === 2){
        alert("Usted es un COBARDE")
    }
}

/*
if(!isNaN(seleccionUsuario)) {

    if(seleccionUsuario === 1) {
        alert("Usted selecciono una hamburguesa");
    } else if(seleccionUsuario === 2) {
        alert("Usted selecciono un pancho");
    } else if(seleccionUsuario === 3) {
        alert("Usted selecciono una milanesa");
    } else if(seleccionUsuario === 4) {
        alert("Usted selecciono un Choripan");
    } else {
        alert("Seleccion Inválida");
    }
}
*/