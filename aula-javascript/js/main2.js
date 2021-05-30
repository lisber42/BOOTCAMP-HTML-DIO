//function
/*function de soma 
function soma( n1, n2){
    return n1 + n2;
}
//function sustitui nome na frase
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(setReplace("vai japao", "japao", "Brasil"));//sustitui brasil por japao na frase
alert(soma(5, 10));// atribuie valores as variaveis n1 e n2*/

/* VARIAVEL GLOBAL E LOCAL EM FUNÇÕES
var validar; //variavel global esta fora da function
//NUNCA ATRIBUIR VALOR A MESMA VARIAVEL FORA E DENTRO "DIFINIR LOCAL OU GLOBAL"
function validaIdade(idade) {
    //var validar;// variavel local esta declarada dentro da function
    if (idade>= 18) {
        validar = true 
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt (" Qual e sua idade");
validaIdade(idade)//chama a função validaIdade
console.log(validar);  */

function botao() {
    //nesta função consegue a traves do ID injetar um texto na pagina HTML,
    // a tag <b></b> deixa o texto em negrito*
      
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar, voce esta sendo direcionado para meu Github!!</b>";
    //console.log(document.getElementById("agradecimento")) 
    //alert("Obrigado por clicar ");
}

/*REDIRECIONAMENTO DE PAGINA
function redirecionar(){

    window.open("https://github.com/");// redireciona para uma outra aba abrindo o endereço indicado
    //window.location.href= "https://github.com/"; // redireciona na mesma aba
}*/

//função para trocar o texto inserido ao passar encima do mouse
function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");// mostra caixa de texto ao passar o mouse se aceitar troca texto
}

//função para voltar ao texto anterior
function voltar(elemento) {
    // variante para trocar texo a passar mouse
    elemento.innerHTML = "Passe o mouse aqui";
    //trocando texto com o document.get_element_by_id
    //document.getElementById("mousemove").innerHTML = " Passe o mouse";
}


// load passa msg de pagina carregada
function load() {
    alert("Pagina Carregada");   
}

//seleciona um valor 
function funcaoChange(elemento) {
    console.log(elemento.value)   
} 

