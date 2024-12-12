    //Funcion para mostrar y ocultar el navegador
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