// IMPOSTO 3 VARIABILI PER FAR FIGURARE LA STRINGA ( SO CHE POTEVO FARLO DIRETTAMENTE NEL LOG MA COSì CREDO SIA PIù CONSONO xd )
var fizzbuzz = "fizzbuzz";
var buzz = "buzz";
var fizz = "fizz" ;

// QUESTO è IL TERZO CHE HO FATTO PER FARE IN MODO CHE STAMPI SULLA PAGINA E NON SUL CONSOLELOG


for (var i = 0 ; i <= 100 ; i++) {
  if (i % 15 == 0 ){
    document.getElementById("lista").innerHTML += fizzbuzz+ "<br>";
  }else if (i % 5 == 0 ) {
   document.getElementById("lista").innerHTML += buzz + "<br>";
  } else if ( i % 3 == 0 ) {
    document.getElementById("lista").innerHTML += fizz+ "<br>";
  }else{
    document.getElementById("lista").innerHTML +=  i+ "<br>";

  }
}





// SAPENDO CHE ATTRAVERSO I MODULI POSSO SCOPRIRE LA DIVISIBILITà DI UN NUMERO IMPOSTO UN CICLO CHE VADA FINO A 100

// ATTRAVERSO L'USO DEGLI IF ED ELSE IF CREO LE SITUAZIONI DIFFERENTI DOVE LA MIA STAMPA DOVRà CAMBIARE
// for (var i = 0 ; i <= 100 ; i++) {
//   if (i % 15 == 0 ){
//     console.log(fizzbuzz);
//   }else if (i % 5 == 0 ) {
//     console.log(buzz);
//   } else if ( i % 3 == 0 ) {
//     console.log(fizz);
//   } else {
//     console.log(i);
//   }
// }

// STRUTTRA NIDIFICATA SCONSIGLIATA DALLA PROF MA è STATA LA PRIMA CHE MI è VENUTA IN MENTE

//   if (i % 15 ==0) {
//      console.log(fizzbuzz);
//   }else {
//     if (i %5 == 0 ) {
//        console.log(buzz);
//       } else{
//         if (i %3 == 0 ) {
//       console.log(fizz);
//     } else {
//       console.log(i);
//     }
//    }
//  }
// }
