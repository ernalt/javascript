var links = document.getElementsByTagName("a"); // Këtu, deklarojmë një variabël të quajtur 'links' duke përdorur fjalën kyçe 'var'
// Përdorim metoden 'document.getElementsByTagName('a')' për të zgjedhur të gjitha elementet me etiketën 'a', që përfaqësojnë elementet e lidhjeve (linket), nga dokumenti HTML.


for(i = 1; i <= links.length; i++) {   // Loop-ja vazhdon për aq kohë sa 'i' është më i vogël se numri i elementeve në koleksionin e 'links' (links.length)

    console.log("this is link number" + i);  // pra ky link eshte + i, e qe i eshte 1, a eshte i me e madhe ose barazim me link.length(pra jo nuk eshte, per te qene duhet te jete 6[ne rastin tone]), pra nuk eshte ather shtoja nje(i++) e keshtu me radhe deri sa te jete 6
}

document.write("all links now looped"); // Të gjitha linket tani janë cikluar


















/*

for(age = 0; age < 10; age++) {  // ky for e ben te njejten gje thjesht ndryshon shkrimi i kodit

    console.log("Your age is less then 10");
    age++;

}

document.write("You are now over 10");

*/