function getColor(event,  elementToCopy) {
  let storage;
  let elemento = event.target;
  storage = elemento.style.backgroundColor;
  return  storage
}

function setColor(event,  elementToChange) {
  event.currentTarget.style.backgroundColor = colorStoraged;
  return colorStoraged
}

function PalleteEvents() {
  for(let i in classColors) {
    if(classColors[i].className !== undefined)
      add(classColors[i],'click',getColor,classColors[i]);

  }
}

function BoardEvents() {
  for(let i in classPixels) {
    if(classPixels[i].className !== undefined)
      add(classPixels[i],'click',setColor,classPixels[i]);
  }
}

PalleteEvents();
BoardEvents();


// for(let i in classPixel)

// add($('.pixel'),'click',setColor,colorStoraged,$('.pixel'));


