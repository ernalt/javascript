for (i = 0; i < 10; i++) {

    if(i === 5 || i === 3){

        continue;  // // logjika eshte e thjeshte, pra, nese i eshte e barabart me 5 ose me 3. vazhdo, mos u mirr me keta numra.....
    }

    console.log(i);

    if(i === 7){
        break;    // logjika eshte e thjeshte, pra, nese i eshte e barabart me 7 ather ndale, dhe printo(vazhdo) cka ka me posht
    }
}

console.log("I have broken out of the loop");