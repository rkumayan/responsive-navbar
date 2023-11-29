function toggle(){
    let burger = document.querySelector(".burger");
    let burger_close = document.querySelector(".burger-close");
    let nav_ul = document.querySelector(".navbar ul");

    if( burger.style.display == "block"){
        burger.style.display = "none";
        burger_close.style.display = "block";

        nav_ul.style.transform = "translateX(0px)";    
    }
    else{
        burger.style.display = "block";
        burger_close.style.display = "none";
        nav_ul.style.transform = "translateX(200%)";
    }
}