function clicou(){
    document.getElementById("obg").innerHTML = "<b>Obrigado por clicar</b>" 
    //console.log(document.getElementById("obg"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://facebook.com/andresilva1715")
    window.location.href = "https://facebook.com/andresilva1715"
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar Texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma (n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar  
}

var idade = prompt("Digite sua idade:")
console.log(validaIdade(idade))

alert(soma(5, 10))*/




/*var d = new Date()
alert(d)
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())*/

/*var contador
for (contador = 0; contador<=5; contador++){
    console.log(contador)
    alert(contador)
}*/

/*var contador = 0
while(contador <= 5){
    console.log(contador)
    alert(contador)
    contador ++
}*/

 /*var idade = prompt("Digite sua idade:")
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/

/*var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}]
console.log(frutas)
alert(frutas[1].nome)*/

/*var fruta = {nome:"Maçã", cor:"Vermelha"}
console.log(fruta.nome)
alert(fruta.cor)*/

//var lista = ["Maçã", "Pêra", "Laranja"]
//lista.push("Uva") -> Avrescenta um item a lista.
//lista.pop() -> Exclui o ultimo item da lista.
//console.log(lista)
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join(" - "))

/*
var idade = 28
var idade2 = "10"
var n1 = 5
var n2 = 3
var frase = "Japão é a melhor seleção do Mundo"
//alert(nome + " tem " + idade + " anos.")
//alert(idade + idade2)
console.log(nome)
console.log(idade + idade2)
console.log(frase.toUpperCase())
//alert(frase.replace("Japão", "Brasil"))
console.log(n1 * n2)*/