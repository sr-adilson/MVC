  
var bebidas = [];

function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let bebida = { "id":id, "nome":nome };
    bebidas.push(bebida);
    localStorage.setItem("bebidas", JSON.stringify(bebidas));
}

function exibir(){
    let bebidasJson =  localStorage.getItem("bebidas");
    console.log(bebidasJson);
    let bebidasConvertido = JSON.parse(bebidasJson)
    console.log(bebidasConvertido[0].nome)
    
}

window.onload = function(){
    exibir();
};