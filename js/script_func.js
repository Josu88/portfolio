    /*jshint esversion: 6 */
    /*JavaScript para despelgar el menu de navegación cuando el tamaño de la pantalla es de movil o tablet */
    //Funcion para mostrar y ocultar el barra de navegación(el nav)
    function showNavBar(){
        let navbarNav = document.getElementById("navbarNav");
    
        //Comprobamos que el nenuNav tenga la clase collapse
        if(navbarNav.classList.contains('collapse')){
        //Si la tiene se la quitamos
        navbarNav.classList.remove("collapse");
        }else{
            //Si no la tiene se la ponemos
            navbarNav.classList.add("collapse");
        }
    }