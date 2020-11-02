  function responsiveMenu() {
    var x = document.getElementById("MyNavBarItems");
    if (x.className === "navbar-items") {
      x.className += " responsive";
    } else {
      x.className = "navbar-items";
    }
  }
