var icon = document.getElementById("dark-mode-icon");
     var navbar = document.getElementById("navbarhh");
     var logo = document.getElementById("LH-logo");
     var avatar = document.getElementById("latifa-avatar");
     icon.onclick = function(){
         document.body.classList.toggle("dark-mode");
         navbar.classList.toggle("dark-navbar-custom");
         
         if(document.body.classList.contains("dark-mode")){
             icon.src = "images/latifa/sun.png";
             logo.src = "images/latifa/LH-light.svg";
             avatar.src = "images/latifa/coffeemug.png";
         }else{
             icon.src = "images/latifa/moon.png";
             logo.src = "images/latifa/LH.svg";
             avatar.src = "images/latifa/coffee.png";
         }
     }

     if (window.localStorage) {
        const darkMode = window.localStorage.getItem("dark-mode");
        if (darkMode) {
          $("body").addClass("dark-mode");
        } else {
          $("body").removeClass("dark-mode");
        }
      }