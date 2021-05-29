//CONDICIONAIS, LOOP, DATE
/************************************************************* */

/*DATE

var d= new Date();
//alert(d.getMonth()+1); // getMoth adicionar mas +1.
//alert(d.getDate()); // getDate mostra o dia atual
//alert(d.getMinutes()); // getMinutes mostra os minutos.
//alert(d.getSeconds()); // mostra segundos
//alert(d.getFullYear()); // mostra o ano .
alert(d.getHours()); // mostra ahora atual
*/

/*IF-ELSE
var idade= prompt ("Qual e sua idade?");// comando PROMPT => CRIA CAIXA DE DIALOGO PARA INSERIR TEXT ALMACERNAR EM VARIAVEL
//SE idade for maior ou igual a 18,executa o comando alert (maior de idade)
if (idade >= 18){ 
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

// LAÇOS DE REPETIÇÃO (LOOP)
/*FOR
var count;//no FOR se declara variavel  e se atribui o valor inicial dentro da estrutura for. 
for( count=0;count < 5; count++){
    alert(count);
}
*/


/* WHILE
var count = 0;
//while enquanto var count for menor ou igual a 5 o ciclo se repite
while (count <= 5) {
    console.log(count);
    alert(count);
    count ++;// cada repetição adicona mas 1 na var count
};
*/


//DICIONARIOS
/************************************************************* */
// arrays de dicionarios
//var fruta =[{nome:"maça" , cor: "vermelho"}, {nome:"uva" , cor: "roxa"},
//{nome:"manga" , cor: "amarelha"}]  // arrays de dicionarios 
//console.log(fruta);//mostra elementos no console
//alert(fruta[0].nome);// e chamando o elemeno cor no alert


/*
var fruta = { nome:"maça" , cor: "vermelho"}// dic criado
console.log(fruta);//mostra elementos no console
console.log(fruta.nome);// so elemento nome
alert(fruta.cor);// e chamando o elemeno cor no alert
*/



//LISTAS (arrays)
/*************************************************** */
//var lista= ["maça", "pera", "laranja"];
//lista.pop (); //excluiendo o ultimo elemento na lista
//lista.push ("uva"); //injetando um elemento (uva) na lista
//console.log(lista);// mostrando a lista
//console.log(lista.length);// mostrando 0 tamanho da lista
//console.log(lista.reverse());// Inverte os elementos da lista
//console.log(lista.toString());// converte a lista numa string
//console.log(lista.join(" * "));// converte a lista numa string e insere carater entre os elementos
//console.log(lista[2]);//posição 2 da lista(laranja)
//alert(lista[0]);//mostando a posição 0  da lista(maça)



//EXIBENDO MSG DE ALERT NA PAGINA HTML
/************************************ */
//var nome = "Lisber Victores";
//var n1 = 3;
//var n2= 5;
//var frase = "japao e o melhor time do mundo"
/*alert ( nome + " tem  " + idade  + " anos");
alert (idade + idade2);*/

//DEPURANDO CODIGO NO CONSOLE

//console.log (nome);
//console.log(n1 + n2);//soma
//console.log(n1 - n2);//sustração
//console.log(n1 / n2);//div
//console.log(n1 * n2);//multiplicação
//console.log(frase.replace("japao", "Brasil"));//sustituiendo palavra na frase
//alert(frase.replace("japao","Brasil"));
//alert(frase.toUpperCase());
//alert(frase.toLowerCase());
//console.log(frase.toUpperCase());//utilizando upperCase, muda toda a frase para letra maisucla
//console.log(frase.toUpperCase());//utilizando lowerCase,muda toda a frase para letra minuscula