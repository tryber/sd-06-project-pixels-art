window.onload = function () {
	// Altera a cor selecionada
  let myColor01 = document.getElementById("color01");
  myColor01.style.backgroundColor = "rgb(0 , 0 , 0)";
	myColor01.addEventListener("click", function () {
		chageSelected(myColor01);
	});	

  let myColor02 = document.getElementById("color02");
  myColor02.style.backgroundColor = "rgb(155 , 50 , 8)";  
	myColor02.addEventListener("click", function () {
		chageSelected(myColor02);
	});

  let myColor03 = document.getElementById("color03");
  myColor03.style.backgroundColor = "rgb(198 , 168 , 108)";  
	myColor03.addEventListener("click", function () {
		chageSelected(myColor03);
	});	

  let myColor04 = document.getElementById("color04");
  myColor04.style.backgroundColor = "rgb(45 , 75 , 139)";
	myColor04.addEventListener("click", function () {
		chageSelected(myColor04);
  });	
  
  let colorSelected = "";
  
  function chageSelected(newSelected){
    let oldSelected = document.querySelector(".selected");
    oldSelected.classList.remove("selected");
    newSelected.classList.add("selected");

    colorSelected = newSelected.style.backgroundColor;
  }

  let Pixels = document.getElementsByClassName("pixel");
  for(var i = 0; i < Pixels.length; i += 1) {
    let myItemPixel = Pixels[i];
    myItemPixel.addEventListener('click', function() {
      myItemPixel.style.backgroundColor = colorSelected;
    });
  }

}
