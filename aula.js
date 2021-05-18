
var fs = require("fs");

var nome  = "Edit"; // string
var idade = 43; // number integer
var peso = 12.3; // number float
var andando = false; // boleano


//console.log("ola turma" + nome);

function oi()
{

  console.log("oi tudo bem");
  
 } 


console.log("antes da funcao");


//async 
fs.writeFile("turma.txt", + nome, oi);

console.log("depois da funcao");
