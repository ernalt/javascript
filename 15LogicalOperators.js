
/*

if (condition) {


    //code here

}
<
=>
=<
!=
!===         */  //cka kem ba tej tash

/*
var myAge = 25;

if(myAge >= 18 && myAge <= 30){         //e kemi perdor operatorin && i cili qendrom per dhe(pra && == dhe(modha dhe dardha == molla && dardha))

    document.write("You can comem, you cool dude!")

} else{

    document.write("You aint coming!");
}
*/

/*
var myAge = 35;
// tek || duhet plotesuar te pakten njeri nga kushtet, nese plotsohet njeri kalojm te tjetri
if(myAge < 18 || myAge > 30){         //e kemi perdor operatorin || i cili qendrom per ose(pra || == ose(modha ose dardha == molla || dardha))

    document.write("You aint coming!");

} else{

    document.write("You can comem, you cool dude!")
    
}
*/


var myAge = 35;  // Vendosni moshën
// tek || duhet plotesuar te pakten njeri nga kushtet, nese plotsohet njeri kalojm te tjetri
if(myAge < 18 || myAge > 30){         // Përdorim operatorin || (ose logjike), që do të ekzekutohet nëse mosha është më e vogël se 18 ose më e madhe se 30
    document.write("You aint coming!");  // Nëse njëra prej kushteve është e vërtetë, shtypni këtë mesazh(pra njera prej kushteve duhet te jete e ver8 per tu printuar ky mszh)
} else{
    document.write("You can comem, you cool dude!");  // Në të kundërt(pra nese asni kusht nuk permbushet), shtypni këtë mesazh
}
