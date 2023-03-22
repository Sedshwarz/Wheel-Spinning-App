var spin = document.getElementById("spin");
var wh = document.querySelector(".wheel");
var items = document.querySelectorAll(".item");
var lastValue = 0;


spin.onclick = function(){

  spin.style.pointerEvents = "none";

  for (var i = 0; i < items.length; i++) {
    items[i].children[0].classList.remove("winner");
  }

  var random = Math.floor(Math.random() * (2000 - 1080) + 1080);
  lastValue += random;
  wh.style.transform = "rotate(" + lastValue + "deg)";
  wh.setAttribute("data-rotate",lastValue);
  var mod = lastValue % 360;

  switch (true) {
    case (mod>=0 && mod<=24) || (mod>=329 && mod<=359):
        shine(0);
      break;

    case (mod<=328 && mod>=280):
        shine(1);
      break;

    case (mod<=279 && mod>=228):
        shine(2);
      break;

    case (mod<=227 && mod>=177):
        shine(3);
      break;

    case (mod<=176 && mod>=125):
        shine(4);
      break;

    case (mod<=124 && mod>=71):
        shine(5);
      break;

    case (mod<=70 && mod>=25):
        shine(6);
      break;
      }
    }

    function shine(x){
      setTimeout(function(){items[x].children[0].classList.add("winner"); spin.style.pointerEvents = "auto";},5000);
    }
