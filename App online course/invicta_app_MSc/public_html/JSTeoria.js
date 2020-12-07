

function redactar(seleccion) {

    IDseleccion = seleccion.getAttribute('id');
    document.getElementById("contenido_inicial").style.display = "none";
    document.getElementById("contenido_criterios").style.display = "none";
    document.getElementById("contenido_conversion").style.display = "none";
    document.getElementById("contenido_reductor").style.display = "none";
    document.getElementById("contenido_elevador").style.display = "none";
    document.getElementById("contenido_reductorelevador").style.display = "none";
    document.getElementById("contenido_compensacion").style.display = "none";
    document.getElementById("contenido_compensadorI").style.display = "none";
    document.getElementById("contenido_compensadorII").style.display = "none";
    document.getElementById("contenido_compensadorIII").style.display = "none";
  
   
   
    document.getElementById("contenido_elcompensador").style.display = "none";


    switch (IDseleccion) {
        case "introduccion_trans":
            document.getElementById("contenido_inicial").style.display = "block";
            break;

        case "criterios":
        case "criterios_trans":
            document.getElementById("contenido_criterios").style.display = "block";
            break;
        case "conversion":
        case "conversion_trans":
            if (document.getElementById("listaconversion").style.display === "block") {
                document.getElementById("contenido_conversion").style.display = "block";
            }
            else {

                document.getElementById("contenido_conversion").style.display = "block";
                document.getElementById("listaconversion").style.display = "block";
            }
            break;

        case "compensacion":
        case "compensacion_trans":

            document.getElementById("contenido_compensacion").style.display = "block";
            document.getElementById("listacompensacion").style.display = "block";
            window.scrollTo(0, 0);
            break;

        

        case "reductor":
        case "reductor_trans":
            document.getElementById("contenido_reductor").style.display = "block";
            window.scrollTo(0, 0);
            break;

        case "elevador":
        case "elevador_trans":
            document.getElementById("contenido_elevador").style.display = "block";
            window.scrollTo(0, 0);
            break;

        case "reductorelevador":
        case "reductorelevador_trans":
            document.getElementById("contenido_reductorelevador").style.display = "block";
            window.scrollTo(0,0);
            break;

        case "compensadorI":
        case "compensadorI_trans":
            document.getElementById("contenido_compensadorI").style.display = "block";
            window.scrollTo(0,0);
            break;

        case "compensadorII":
        case "compensadorII_trans":
            document.getElementById("contenido_compensadorII").style.display = "block";
            window.scrollTo(0,0);
            break;

        case "compensadorIII":
        case "compensadorIII_trans":
            document.getElementById("contenido_compensadorIII").style.display = "block";
            window.scrollTo(0,0);
            break;

       

        case "elcompensador":
        case "elcompensador_trans":
            document.getElementById("contenido_elcompensador").style.display = "block";
            window.scrollTo(0,0);
            break;

    }

}



