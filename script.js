//let frutas = 'abacaxi';
//var frutas1 = 'mamão';
//const numero1 = 1;
//let booleano = true;
//let booleano1 = false;
//let ola ;
//let azul = null;

//let arrays = {1,2,3,4,5,6}

//let obj = {
    //id:1,
    //nome:"Elias",
    //carro:"Fusca"
//},


//let idade = 2024-2001;

//if (idade >= 16){
   // console.log("Pode votar")

//}
 //else{
    //console.log("Não pode")
 //}

 //let senha = 1234;

 //if(senha === 1234){
    //console.log("Acesso permitido")
 //}

 //else{
 //console.log("Acesso Negado")
 //}

//  let numero1 = 50;
//  let numero2 = 60;
    
//  if (numero1 > numero2){
//     console.log("numero1 e maior que numero2")
//  }

//  else{
//     console.log("numero2 e maior que numero1")
//  }

// let maca = 40

// if (maca >= 12){
//     let maior = maca * 0.25
// }
    
// else {
//     let menor = maca 0.30
//     console.log("numero de maca foi compradas foi de : ${maca")
//}

// let numero1 = 10;
// let numero2 = 12;
// let numero3 = 14;


// if (numero1 > numero2 && numero1 > numero3){
//     console.log("ok")
// }
// else if (numero2 > numero1 && numero3 > numero1){
//     console.log("ok2")
// }
// else if("numero3 > numero1 && numero3 >numero2"){
//     console.log("ok3")
// }

// let altura = 1.75

// let sexo = "masculino"

// if (sexo === "masculino"){
//     let pesoIdeal = (72.7*altura)-58;
//     console.log(pesoIdeal)
// }else if (sexo === "feminino"){
//     let pesoIdeal = (62.1*altura2)-44.7;
//     console.log(pesoIdeal)
// }

//let numero1 = Number(prompt("Digite sua nota 1 : "))
//let numero2 = Number(prompt("Digite seu nota 2 : "))
//let media = (numero1 + numero2 )/2;


//if( media<10 && media >=9 ) {
    //alert(`A nota final foi ${media} e o aluno está Aprovado por conceito A`) 
//}else if (media <9 && media >=7.5) {
    //alert(`A nota final foi ${media} e o aluno está Aprovado por conceito B`)
//}else if (media<7.5 && media >=6) {
    //alert(`A nota final foi ${media} e o aluno está Aprovado por conceito C`)
//}else if (media <6 && media >=4) {
    //alert(`A nota final foi ${media} e o aluno está Reprovado por conceitp D`)
//}else if ( media <4 && media>=0) {
    //alert(`A nota final foi ${media} e o aluno está Reprovadopor conceito E`)
//}


//let salario = 1000;

//if(salario <=280 ){
    //let percentual = 1.2 - 1
    //let novoSalario = salario*1.2
    //let valorAumento = novoSalario - salario

    //alert(`O salario antes do reajuste é igual ${salario}, O percentual aplicado é de ${percentual.toFixed(2)},o valor do aumento é de ${valorAumento} O novo salario é de ${novoSalario}`)

//} else if(salario>280 && salario<=700) {
    //let percentual = 1.15
    //let novoSalario = salario*1.15
    //let valorAumento = novoSalario - salario
    
    //alert(`O salario antes do reajuste é igual ${salario}, o percentual aplicado é de ${percentual.toFixed(2)}, o valor do aumento é de ${valorAumento} e o novo salario é de ${novoSalario}`)

//} else if (salario>700 && salario <= 1500) {
    //let percentual =  1.10 - 1 
    //let novoSalario = salario*1.10
    //let valorAumento = novoSalario - salario
    
    ///alert(`O salario antes do reajuste é igual ${salario}, o percentual aplicado é de ${percentual.toFixed(2)}, o valor do aumento é de ${valorAumento} e o novo salario é de ${novoSalario}`)

//} else if(salario>1500) {
   // let percentual =  1.05 - 1 
    //let novoSalario = salario*1.05
    //let valorAumento = novoSalario - salario
    
   // alert(`O salario antes do reajuste é igual ${salario}, o percentual aplicado é de ${percentual.toFixed(2)}, o valor do aumento é de ${valorAumento} e o novo salario é de ${novoSalario}`)
//}

//let frutas = ["Banana", "Abacate" , "Uva" , "Pera"]

//for (let index = 0; index < frutas.length; index++) {
    //console.log(frutas[index])
    
//}

//let fatorial = 0

//for (let index = 10; index <=1; index++) {
    //let valor = index * 8

  //  fatorial = fatorial * index
    
    
//}
//console.log(fatorial)

//let arrayObj = [
    //{
        ///name:"Elias",
        //role:"Teacher"
   // },
  //  {
      //  id:2,
   //     name:"Joao",
   //     role:"Student"
   // },
   // {
   //     id:3,
  //      role:"Student"
  //  },
  //  {
   //     id:4,
   //     name:"Jander",
    //    role:"Student"
   // },
//{
   //     id:5,
     //   name:"Ander-som ",
      //  role:"Student"
    //}
//]


//for (let index = 0; index < arrayObj.length; index++) {
  //  console.log(arrayObj[index].name)
//}

// let produto = [
//     {
//     id:1,
//     nome:"Camisa do flamengo",
//     Preco:"30.0"
//     },
//     {
//     id:2,
//     nome:"Bola",
//     preco:"25.0"
//     },
//     {
//         id:3,
//         nome:"Raquete",
//         preco:"100.00"
//     },
//     {
//         id:4,
//         nome:"Tenis",
//         preco:"150.00"
//     }
// ]

// for(let index = 0; index < produto.length; index++){
//     if(produto[index].id === 3){
//         console.log(`O produto de nome ${produto[index].nome}Tem o preco ${produto[index].preco}`)
//     }
// }

    let contador = 0
     for (let index = 1; index <=100; index++) {
     if(index % 3 ===0 && index % 4 !== 0){
        contador++
        console.log("mar")
     }else if (index % 4 ===0 && index % 3 !== 0){
        contador++
        console.log("Mininu")
    }else if (index % 3 ==0 && index % 4==0) {
        contador++
        console.log("Mar Mininu")
}
}


