let btnMenu = document.querySelector(".menu-icon");

/*Style ul*/
let li = document.querySelectorAll(".menu li");

li.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    document.querySelector(".menu").style.borderRight = "5px solid #fff";
  });

  item.addEventListener("mouseout", function () {
    document.querySelector(".menu").style.borderRight = "5px solid transparent";
  });
});

/*Menu function*/

function viewMenu() {
  document.querySelector(".menu").classList.toggle("show");
  btnMenu.classList.toggle("active");
}

btnMenu.addEventListener("click", function (e) {
  if (document.querySelector(".menu").classList.contains("show")) {
    viewMenu();
  } else {
    viewMenu();
  }
});

document.addEventListener("keydown", function (e) {
  if (
    document.querySelector(".menu").classList.contains("show") &&
    e.keyCode == 27
  ) {
    viewMenu();
  }
});

document.addEventListener("click", function (e) {
  if (e.target == document.querySelector("body")) {
    viewMenu();
  }
});
