function dragStart(event) {
  console.log(event.target);
  event.dataTransfer.setData("text", event.target.id);  
}

function dragEnd(event) {  
}

function allowDrop(event) {
  console.log("allow")
    event.preventDefault();
}

function drop(event) {
    console.log ("drop");
    var data = event.dataTransfer.getData("text");
    console.log (data);
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
}

function  myFunction (){
  var box = document.createElement("div");
  document.body.appendChild(box);

  var father = document.getElementById("father");
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "save");
  input.setAttribute("value", "Escribe el nombre de tu lista");
  input.className = "inputbox"
  var save = document.createTextNode ("Crear listas");
  var btn = document.createElement("button");
  btn.className = "save"

  //Papis con morros

  btn.appendChild(save);
  box.appendChild(input);
  father.appendChild(box);
  box.appendChild(btn);

    btn.onclick = function (){
      var textarea= document.createElement("textarea");
      box.appendChild(textarea);
      textarea.className = "introtext";
      }   
}


 
  