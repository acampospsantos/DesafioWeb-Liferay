function adicionar(){
    let text = document.getElementById("texto").value;   
    let list = document.getElementById("lista").innerHTML;
    
    list +="<li>" +text+ "</li>";
    
    document.getElementById("lista").innerHTML = list;
    //Limpei o campo de texto
    document.getElementById("texto").value = null;
  }
  
  function remover(){
     let list = document.getElementById("lista").innerHTML="";
     let text = document.getElementById("texto").value; 
    
    list -="<li>" +text+ "</li>";
  }